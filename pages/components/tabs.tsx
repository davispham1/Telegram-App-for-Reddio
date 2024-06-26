import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BsTabs: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container-box">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-Balance-tab" data-bs-toggle="pill" data-bs-target="#pills-Balance" type="button" role="tab" aria-controls="pills-Balance" aria-selected="true">Balance</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Deposit-tab" data-bs-toggle="pill" data-bs-target="#pills-Deposit" type="button" role="tab" aria-controls="pills-Deposit" aria-selected="false">Deposit</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Withdraw-tab" data-bs-toggle="pill" data-bs-target="#pills-Withdraw" type="button" role="tab" aria-controls="pills-Withdraw" aria-selected="false">Withdraw</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-Balance" role="tabpanel" aria-labelledby="pills-Balance-tab" tabIndex={0}>sup</div>
                    <div className="tab-pane fade" id="pills-Deposit" role="tabpanel" aria-labelledby="pills-Deposit-tab" tabIndex={0}>sup bro</div>
                    <div className="tab-pane fade" id="pills-Withdraw" role="tabpanel" aria-labelledby="pills-Withdraw-tab" tabIndex={0}>...</div>
                </div>
            </div>
        </div>
    );
};

export default BsTabs;