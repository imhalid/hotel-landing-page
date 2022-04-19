import React from "react";
import { CgMenuRight } from "react-icons/cg";

function Header() {
  return (
    <div className="flex align-middle items-center justify-between p-8 md:pl-[60px] md:pr-[60px]">
      <div className="flex items-center  space-x-2 font-medium ">
        <img
          className="w-10 h-10"
          src={require("../assets/Subtract.png")}
          alt="logo"
        />
        <p className="text-white">
          Nightas <br /> Hotels
        </p>
      </div>

      <ul className="md:flex space-x-[4.5rem] hidden  ">
        <li className="headerLink">Rooms</li>
        <li className="headerLink">About</li>
        <li className="headerLink">Teams</li>
        <li className="headerLink">Contact Us</li>
      </ul>
      <CgMenuRight className="flex text-white text-3xl md:hidden " />
    </div>
  );
}

export default Header;
