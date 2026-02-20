import { FaCartShopping, FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Product = ({ coffee }) => {
  console.log(coffee);

  return (
    <div className="group gap-5 bg-[#eceae3bd] p-1 md:p-2 lg:p-3">
      <div className="h-40 md:h-45 lg:h-50 2xl:h-55 w-full relative overflow-hidden">
        <img
          className="h-full w-full group-hover:scale-105 duration-500"
          src={coffee?.photo}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between pt-1 md:pt-2">
        <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
          {coffee?.name}
        </h2>
        <h2 className="text-[#E3B577] font-medium text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[24px]">
          $ {coffee?.price}
        </h2>
      </div>
      <p className="raleway text-[14px] md:text-[16px] text-[#1b1a1acc]">
        Chef: {coffee?.chef}
      </p>
      <div className="flex items-center gap-2 pt-1 md:pt-2">
        <button className="bg-[#ECEAE3] text-[#D2B48C] hover:bg-[#D2B48C] h-8 md:h-9 lg:h-10 w-full hover:text-[#ffff] text-[22px] flex items-center justify-center active:scale-[.9] duration-500 cursor-pointer">
          <FaEye />
        </button>
        <button className="bg-[#ECEAE3] text-[#3C393B] hover:bg-[#3C393B] h-8 md:h-9 lg:h-10 w-full hover:text-[#ffff] text-[22px] flex items-center justify-center active:scale-[.9] duration-500 cursor-pointer">
          <MdEdit />
        </button>
        <button className="bg-[#ECEAE3] text-[#6F4E37] hover:bg-[#6F4E37] h-8 md:h-9 lg:h-10 w-full hover:text-[#ffff] text-[22px] flex items-center justify-center active:scale-[.9] duration-500 cursor-pointer">
          <FaCartShopping />
        </button>
        <button className="bg-[#ECEAE3] text-[#EA4744] hover:bg-[#EA4744] h-8 md:h-9 lg:h-10 w-full hover:text-[#ffff] text-[22px] flex items-center justify-center active:scale-[.9] duration-500 cursor-pointer">
          <RiDeleteBin5Fill />
        </button>
      </div>
    </div>
  );
};

export default Product;
