import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div className="h-[30vh] md:h-[45vh] lg:h-[90vh] 2xl:h-[89vh] w-full px-6 md:px-12 lg:px-45 2xl:px-50 hero flex flex-col justify-center items-end">
      <div className="lg:w-1/2">
        <h1 className="text-[#ffff] text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] font-medium">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="raleway text-[#ffff] pb-4 md:pb-5 lg:pb-6 2xl:pb-7 text-[14px] md:text-[16px]">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-.5 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#ffff] text-[#242222] hover:text-white bg-[#E3B577] hover:bg-transparent duration-300 flex items-center gap-1 md:gap-2 group"
          to={"/login"}
        >
          <span>Learn More</span>
          <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
