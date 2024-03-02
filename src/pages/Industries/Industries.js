import React from "react";
import IndustriesIntro from "./IndustriesIntro";
import LicenseHealth from "./LicenseHealth";
import { FinancialServices } from "./FinancialServices";
import Education from "./Education";
import Retails from "./Retails";
import Insurance from "./Insurance";
import Airline from "./Airline";
import Contact from "./Contact";

export default function Industries({Mode}) {
  return (
    <div id={Mode ? "IndustriesDark" : "IndustriesLight" }>
      <IndustriesIntro />
      <LicenseHealth />
      <FinancialServices />
      <Retails />
      <Education />
      <Insurance />
      <Airline/>
      <Contact/>
    </div>
  );
}
