import React from "react";

function MidOne() {
  return (
    <div className="md:pt-36">
      <div className="flex md:flex-row flex-col-reverse">
        <img
          className="imgBorder max-w-3xl mr-10 -ml-10 object-cover"
          src="https://images.unsplash.com/photo-1567491634123-460945ea86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt=""
          srcset=""
        />
        <div className=" mt-36 pl-4 ">
          <h1 className="text-4xl font-bold leading-[3rem]  max-w-[300px]">
            Nice Bedroom, Cool Vibes Yea!!
          </h1>
          <p className="font-light pr-5 pt-6  max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="rounded-full mb-24 transition-all active:bg-[#417c9b] focus:outline-none focus:ring focus:bg-[#3282ae] hover:bg-[#40a2d8]/90 bg-[#40a2d8] text-white font-bold text-xl mt-7 w-[10.8rem] h-[3.6rem]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MidOne;
