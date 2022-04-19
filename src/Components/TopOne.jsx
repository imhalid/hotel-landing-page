import React from "react";
import Inputs from "./Inputs";
import TopText from "./TopText";

function TopOne() {
  return (
    <div className="md:flex md:justify-between ">
      <TopText />
      <Inputs />
    </div>
  );
}

export default TopOne;
