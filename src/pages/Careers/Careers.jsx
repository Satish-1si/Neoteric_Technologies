import React from "react";
import "./Careers.css";
import WhoWeAre from "./WhoWeAre";

import JoinOurTeam from "./JoinOurTeam";

export default function Careers() {


  return (
    <div>
      <div className="careers-card" >
        <div className="heading">
          Forge Your Path,
          <br />
          Shape Your Future
        </div>
        <div className="para pt-3">
          Embark on a journey of self-discovery and professional growth with us.
          At Neoteric Technologies, we empower you to forge your unique path,
          providing opportunities and support to shape a future that aligns with
          your ambitions. Join us in a dynamic environment that values
          innovation, collaboration, and personal development, and together,
          let's craft a future of success.
        </div>
      </div>
      <WhoWeAre/>     
      <JoinOurTeam/>
    </div>
  );
}
