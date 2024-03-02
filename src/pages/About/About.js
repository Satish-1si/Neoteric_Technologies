import React from "react";
import AboutIntro from "./AboutIntro";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

import "./About.css";

export default function About({Mode}) {
  return (
    <div id={Mode ? "aboutDark" : "aboutLight"}>
      <AboutIntro />
      <OurMission />
      <OurVision />
    </div>
  );
}
