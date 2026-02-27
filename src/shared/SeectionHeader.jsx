import React from "react";

const SeectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center pb-5 md:pb-6 lg:pb-7 2xl:pb-8">
      <p className="text-[#1B1A1A] raleway text-[14px] md:text-[16px]">
        {title}
      </p>
      <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg">
        {subtitle}
      </h2>
    </div>
  );
};

export default SeectionHeader;
