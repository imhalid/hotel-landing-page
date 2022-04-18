import React from "react";

function Header() {
  return (
    <div className="flex align-middle items-center justify-between p-5 pl-[60px] pr-[60px]">
      <div className="flex items-center ">
        <img
          className="w-10 h-10"
          src={require("./assets/Subtract.png")}
          alt="logo"
        />
        <p>
          Nightas <br /> Hotels
        </p>
      </div>

      <ul className="flex space-x-6">
        <li>Rooms</li>
        <li>About</li>
        <li>Teams</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Header;
