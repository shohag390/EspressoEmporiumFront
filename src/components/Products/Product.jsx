import { MdOutlineZoomOutMap } from "react-icons/md";

const Product = ({ coffee }) => {
  return (
    <div className="relative group w-full bg-[#eceae3bd] overflow-hidden duration-500">
      {/* Image */}
      <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
        <img
          src={coffee?.photo}
          alt={coffee?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#eceae3bd] bg-opacity-30 opacity-0 group-hover:opacity-100  duration-500 flex items-center justify-center">
          <button className="text-[#331A15] p-3 text-[30px] hover:scale-120 cursor-pointer duration-300">
            <MdOutlineZoomOutMap />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex justify-between">
        <div>
          <h2 className="text-[#331A15] font-semibold text-lg md:text-xl lg:text-2xl">
            {coffee?.name}
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Chef: {coffee?.chef}
          </p>
        </div>
        <span className="text-[#E3B577] font-medium text-md md:text-lg">
          $ {coffee?.price}
        </span>
      </div>
    </div>
  );
};

export default Product;
