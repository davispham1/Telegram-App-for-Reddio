import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from "./Deposit";


const BsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('deposit');
  const [withdrawContent, setWithdrawContent] = useState<string>('');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleWithdrawContentChange = (content: string) => {
    setWithdrawContent(content);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container-box">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'deposit' ? 'active' : ''}`}
              onClick={() => handleTabChange('deposit')}
              aria-current="page"
              href="#"
            >
              Deposit
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${activeTab === 'withdraw' ? 'active' : ''}`}
              onClick={() => handleTabChange('withdraw')}
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Withdraw
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleWithdrawContentChange('Content for Action')}
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleWithdrawContentChange('Content for Another action')}
                >
                  Another action
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className={`tab-pane fade ${activeTab === 'deposit' ? 'show active' : ''}`} id="pills-Deposit" role="tabpanel" aria-labelledby="pills-Deposit-tab">
            <Deposit />
          </div>
          <div className={`tab-pane fade ${activeTab === 'withdraw' ? 'show active' : ''}`} id="pills-Withdraw" role="tabpanel" aria-labelledby="pills-Withdraw-tab">
          {withdrawContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BsTabs;