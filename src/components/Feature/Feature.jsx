import React from "react";

const Feature = ({ item }) => {
  console.log(item);

  return (
    <div>
      <div className="pb-1 md:pb-2 lg:pb-3">
        <img
          className="h-10 md:h-11 lg:h-12 2xl:h-13"
          src={item?.icon}
          alt=""
        />
      </div>
      <h1 className="text-[#331A15] font-medium text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[28px] ">
        {item?.title}
      </h1>
      <p className="text-[#1B1A1A] raleway text-[14px] md:text-[16px] line-clamp-1 lg:line-clamp-2">
        {item?.description}
      </p>
    </div>
  );
};

export default Feature;
