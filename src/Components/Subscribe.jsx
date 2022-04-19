import React from "react";

function Subscribe() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#40A2D8]  w-screen md:m-24 mt-36 h-[600px] md:h-[400px] text-white text-center flex-col items-center justify-center">
        <h1 className="font-bold text-4xl leading-[3rem] px-10 md:text-5xl mt-14 md:leading-[4rem]">
          Subscribe to Our Newsletter For Weekly Article Update.
        </h1>
        <p className="mt-8 px-8 md:px-[14rem]">
          We have hotel-related blog so we can share our thought and rutinity in
          our blog that updated weekly. We will not spam you, we promise.
        </p>
        <div className="flex md:flex-row flex-col items-center justify-center mt-10">
          <input
            className="w-[300px] h-[50px] md:w-[330px] md:h-10  bg-white/30 placeholder:ml-2 placeholder:text-white/75 rounded-full p-2"
            type="email"
            placeholder="&nbsp;&nbsp;&nbsp;Enter your email"
          />
          <button className="w-[300px] h-[50px] mt-6 md:w-[120px] md:mt-0  md:ml-4 text-white font-bold rounded-3xl md:h-10 transition-all active:bg-[#0f6072] focus:outline-none focus:ring focus:bg-[#0f4a57] bg-[#11768C] hover:bg-[#11768C]/90">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
