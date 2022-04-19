function Inputs() {
  return (
    <div className="md:pr-[60px] items-center flex justify-center ">
      <div
        className="w-[400px] h-[160px] bg-white rounded-[3rem] 
      flex justify-between flex-col items-center "
      >
        <div className="flex justify-evenly items-center pt-8 pl-5 pr-5">
          <input
            className="text-center h-7 bg-transparent  focus:outline-none "
            type="text"
            placeholder="Booking Date"
          />
          <hr className="border-gray-400 w-10 rotate-90" />
          <input
            className="text-center h-7 bg-transparent   focus:outline-none"
            type="text"
            placeholder="Duration (Night)"
          />
        </div>
        <div className="w-[90%]">
          <button className=" w-full text-white font-bold rounded-3xl h-[50px] transition-all active:bg-[#0f6072] focus:outline-none focus:ring focus:bg-[#0f4a57] bg-[#11768C] hover:bg-[#11768C]/90 mb-5 px-5">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
