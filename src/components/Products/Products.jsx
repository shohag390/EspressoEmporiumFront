import Product from "./Product";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";
import SeectionHeader from "../../shared/SeectionHeader";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const { coffeeData } = useProduct();

  const coffees = coffeeData.slice(0, 8);

  return (
    <div className="px-6 md:px-12 lg:px-35 2xl:px-50 products py-6 md:py-8 lg:py-10 2xl:py-14">
      <SeectionHeader
        title="--- Sip & Savor ---"
        subtitle="Our Popular Products"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
        {coffees.map((coffee) => (
          <Product key={coffee?._id} coffee={coffee} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-7 md:pt-8 lg:pt-9 2xl:pt-10">
        <Link
          to={"/coffees"}
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-1 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group"
        >
          <span> All Coffee</span>
          <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
