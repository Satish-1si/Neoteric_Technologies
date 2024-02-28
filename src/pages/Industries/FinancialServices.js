import React from "react";

import "./FinancialServices.css";

export const FinancialServices = () => {
  return (
    <div className="FinancialServices-main d-flex">
      <div className="FinancialServices-main-left"></div>
      <div className="FinancialServices-main-right d-flex flex-column gap-4 ">
        <div className="FinancialServices-title">Financial services</div>
        <div className="FinancialServices-description">
          In the avant-garde domain of neoteric technologies, Financial Services
          undergo a digital metamorphosis. AI-driven analytics, blockchain, and
          fintech innovations revolutionize transactions, enhancing speed and
          security. This synergy of finance and technology reshapes the
          industry, offering seamless transactions, personalized services, and
          unprecedented insights, heralding a new era of financial technology.
        </div>
        {/* <div className="FinancialServices-viewProjects">View Projects</div> */}
      </div>
    </div>
  );
};
