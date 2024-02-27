import React from "react";

import "./Airline.css";

export default function Airline() {
  return (
    <div className="Airline-main d-flex">
      <div className="Airline-main-left"></div>
      <div className="Airline-main-right d-flex flex-column gap-4 ">
        <div className="Airline-title">Airline</div>
        <div className="Airline-description">
          In the airborne era of neoteric technologies, airlines soar to new
          heights. Digital check-ins, AI-powered route optimization, and
          IoT-driven maintenance elevate efficiency. Passenger experiences are
          transformed with in-flight connectivity and personalized services. The
          marriage of technology and aviation ensures safer, smoother, and more
          connected journeys, shaping the future of air travel.
        </div>
        <div className="Airline-viewProjects">View Projects</div>
      </div>
    </div>
  );
}
