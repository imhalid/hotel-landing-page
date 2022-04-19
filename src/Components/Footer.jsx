import React from "react";
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row m-6 md:justify-between md:mx-24 ">
      <div className="flex-col">
        <div className="flex items-center  space-x-2 font-medium ">
          <img
            className="w-10 h-10"
            src={require("../assets/Subtract.png")}
            alt="logo"
          />
          <p className="text-black">
            Nightas <br /> Hotels
          </p>
        </div>
        <p className="w-[16.5rem] mt-5 text-[#40434A]">
          2021 Award winning hotel and Lorem ipsum dolor sit amet
        </p>
        <div className="flex space-x-4 mt-5">
          <CgFacebook className="bg-[#3AA0D9] text-white w-8 h-8 rounded-full p-1" />
          <CgTwitter className="bg-[#3AA0D9] text-white w-8 h-8 rounded-full p-1" />
          <CgInstagram className="bg-[#3AA0D9] text-white w-8 h-8 rounded-full p-1" />
        </div>
      </div>
      <div className="flex mb-10  mt-14 md:mt-0 md:flex-nowrap space-x-10 md:space-x-24">
        <div className="space-y-3">
          <p className="text-[#40434A] font-bold">Products</p>
          <p className="text-[#70737C] font-light">Bathroom</p>
          <p className="text-[#70737C] font-light">Bedroom</p>
          <p className="text-[#70737C] font-light">Living Room</p>
          <p className="text-[#70737C] font-light">Kitchen</p>
        </div>
        <div className="space-y-3">
          <p className="text-[#40434A] font-bold">Contact</p>
          <p className="text-[#70737C] font-light">About</p>
          <p className="text-[#70737C] font-light">Teams</p>
          <p className="text-[#70737C] font-light">Profile</p>
          <p className="text-[#70737C] font-light">FAQ</p>
        </div>
        <div className="space-y-3">
          <p className="text-[#40434A] font-bold">Legals</p>
          <p className="text-[#70737C] font-light">Privacy</p>
          <p className="text-[#70737C] font-light">Disclamier</p>
          <p className="text-[#70737C] font-light">Terms</p>
          <p className="text-[#70737C] font-light">Company</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
