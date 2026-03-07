import React from "react";

const Instagram = ({ image }) => {
  return (
    <div className="h-55 md:h-70 lg:h-80 2xl:h-100 w-full overflow-hidden relative group">
      <img
        className="h-full w-full group-hover:scale-110 duration-500 absolute"
        src={image?.photo}
        alt={image?.name}
      />
      <div className="absolute h-full w-full opacity-0 bg-[#331a15a6] flex items-center justify-center group-hover:opacity-100 duration-500">
        <h4 className="text-[#ffff] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
          {image?.name}
        </h4>
      </div>
    </div>
  );
};

export default Instagram;
