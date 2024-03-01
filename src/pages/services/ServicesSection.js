import React from "react";
import "./ServicesSection.css"
import sideImage from "./servicesImages/sectionBg.svg"
// ServiceInfo component for displaying service information
function ServiceInfo({ title, description }) {
  return (
    <section className="serviceInfoSection">
      <h2 className="serviceTitle">{title}</h2>
      <p className="serviceDescription">{description}</p>
    </section>
  );
}


// Main component
function ServicesSection() {
  return (
    <>
     <div className="Service-sectionContainer">
          <ServiceInfo title={"Services"} description={"Evolve. Expand. Refine. Innovate."}/>
     </div>
    </>
  );
}

export default ServicesSection;