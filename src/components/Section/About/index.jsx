import React from "react";
import ReliabilityAnim from "./Anim-arrow/Reliability";
import RespectAnim from "./Anim-arrow/Respect";
import ServiceAnim from "./Anim-arrow/service";
import SecurityAnim from "./Anim-arrow/security";
import "../../../scss/Section/about/index.scss";

function SectionAbout() {
  return (
    <div className="container">
      <ReliabilityAnim />
      <RespectAnim />
      <ServiceAnim />
      <SecurityAnim />
    </div>
  );
}

export default SectionAbout;
