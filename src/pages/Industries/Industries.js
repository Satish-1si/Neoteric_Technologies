import React from "react";
import IndustriesIntro from "./IndustriesIntro";
import LicenseHealth from "./LicenseHealth";
import { FinancialServices } from "./FinancialServices";
import Education from "./Education";
import Retails from "./Retails";
import Insurance from "./Insurance";
import Airline from "./Airline";

export default function Industries() {
  return (
    <div>
      <IndustriesIntro />
      <LicenseHealth />
      <FinancialServices />
      <Retails />
      <Education />
      <Insurance />
      <Airline/>
    </div>
  );
}
