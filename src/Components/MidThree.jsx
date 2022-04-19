import React from "react";

function MidThree() {
  return (
    <div className="md:pt-36">
      <div className="flex md:flex-row-reverse flex-col-reverse">
        <img
          className="imgBorder max-w-3xl ml-10 -mr-10 object-cover"
          src="https://images.unsplash.com/photo-1633040243823-6bf8d4edb0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ImageTop"
        />
        <div className=" mt-36 pl-4 ">
          <h1 className="text-4xl font-bold leading-[3rem]  max-w-[350px]">
            Free Breakfast, It’s All You Can Eat!
          </h1>
          <p className="font-light pr-5 pt-6  max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="rounded-full mb-24 transition-all active:bg-[#417c9b] focus:outline-none focus:ring focus:bg-[#3282ae] hover:bg-[#40a2d8]/90 bg-[#40a2d8] text-white font-bold text-xl mt-7 w-[10.8rem] h-[3.6rem]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default MidThree;
