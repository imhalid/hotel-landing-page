import React from "react";
import Inputs from "./Inputs";
import TopText from "./TopText";

function TopOne() {
  return (
    <div className="space-y-9 my-5 md:flex-row md:justify-center flex items-center flex-col ">
      <TopText />
      <Inputs />
    </div>
  );
}

export default TopOne;
