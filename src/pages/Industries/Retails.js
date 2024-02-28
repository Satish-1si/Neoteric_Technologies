import React from "react";

import "./Retails.css";

export default function Retails() {
  return (
    <div className="Retails-main d-flex">
      <div className="Retails-main-left d-flex flex-column gap-4 ">
        <div className="Retails-title">Retail</div>
        <div className="Retails-description">
          In the era of neoteric technologies, Retail undergoes a digital
          revolution. AI-driven analytics, augmented reality, and seamless
          ecommerce redefine customer experiences. With personalized
          recommendations and frictionless transactions, technology shapes a
          retail landscape where innovation meets consumer expectations,
          creating adynamic and tech-savvy shopping ecosystem for the modern
          consumer.
        </div>
        {/* <div className="Retails-viewProjects">View Projects</div> */}
      </div>
      <div className="Retails-main-right"></div>
    </div>
  );
}
