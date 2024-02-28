import React from "react";

import "./Insurance.css";

export default function Insurance() {
  return (
    <div className="Insurance-main d-flex">
      <div className="Insurance-main-left d-flex flex-column gap-4 ">
        <div className="Insurance-title">Insurance</div>
        <div className="Insurance-description">
          In the realm of insurance, innovation reigns supreme. Neoteric
          technologies, such as AI and blockchain, streamline processes,
          enhancing underwriting accuracy and claims efficiency. Insurtech
          advancements reshape customer experiences, offering personalized
          policies and swift digital interactions. The intersection of insurance
          and technology propels the industry into a future defined by agility
          and customer-centricity.
        </div>
        {/* <div className="Insurance-viewProjects">View Projects</div> */}
      </div>
      <div className="Insurance-main-right"></div>
    </div>
  );
}
