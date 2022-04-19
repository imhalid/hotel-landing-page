import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function MidTwo() {
  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <div className="max-w-[250px] text-3xl text-center font-bold">
        Clean Room, Nice Sweet Dreams.
      </div>
      <div className=" space-y-10 md:space-y-0 md:space-x-10 md:flex mt-16">
        <div className="flex p-10 justify-center items-center flex-col rounded-md w-[347px] h-[363px] bg-white">
          <BadgeCheckIcon
            className="bg-[#11768C] w-[5.75rem] p-4 rounded-full"
            color="white"
          />
          <p className="font-bold text-2xl mb-4 mt-14">Great View</p>
          <p className="leading-7 text-center">
            The locations is strategist, we have a great view and Lorem ipsum
            dolor sit amet, consectetur{" "}
          </p>
        </div>
        <div className="flex p-10 justify-center items-center flex-col rounded-md w-[347px] h-[363px] bg-white">
          <BadgeCheckIcon
            className="bg-[#11768C] w-[5.75rem] p-4 rounded-full"
            color="white"
          />
          <p className="font-bold text-2xl mb-4 mt-14">Trendy Rooms</p>
          <p className="leading-7 text-center">
            Come up and maintain trendy rooms design, always modern and
            following the trends.
          </p>
        </div>
        <div className="flex p-10 justify-center items-center flex-col rounded-md w-[347px] h-[363px] bg-white">
          <BadgeCheckIcon
            className="bg-[#11768C] w-[5.75rem] p-4 rounded-full"
            color="white"
          />
          <p className="font-bold text-2xl mb-4 mt-14">Award Winning</p>
          <p className="leading-7 text-center">
            We are winning some of hotel awards around the world, Lorem ipsum
            dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </div>
  );
}

export default MidTwo;
