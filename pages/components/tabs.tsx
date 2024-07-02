import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from "./Deposit";


const BsTabs: React.FC = () => {
    return ( 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container-box">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Deposit-tab" data-bs-toggle="pill" data-bs-target="#pills-Deposit" type="button" role="tab" aria-controls="pills-Deposit" aria-selected="false">Deposit</button>
                    </li>
                    <li className="nav-item dropdown" role="presentation">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownWithdraw" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Withdraw
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownWithdraw">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade" id="pills-Deposit" role="tabpanel" aria-labelledby="pills-Deposit-tab" tabIndex={0}><Deposit /></div>
                    <div className="tab-pane fade" id="pills-Withdraw" role="tabpanel" aria-labelledby="pills-Withdraw-tab" tabIndex={0}></div>
                </div>
            </div>
        </div>
    );
};

export default BsTabs;