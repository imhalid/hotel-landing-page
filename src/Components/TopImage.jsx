import React from "react";

function TopImage() {
  return (
    <div className=" flex justify-center items-center">
      <div className="pl-[2%] pr-[2%] max-w-[1100px]">
        <img
          className="imgBorder pt-10"
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="ImageTop"
        />
      </div>
    </div>
  );
}

export default TopImage;
