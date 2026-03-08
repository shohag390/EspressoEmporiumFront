import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Swal from "sweetalert2";
import baseURL from "../../api/baseUrl";
import Product from "./Product";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CoffeeInfo = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [relatedCoffees, setRelatedCoffees] = useState([]);

  useEffect(() => {
    // Fetch selected coffee
    fetch(`${baseURL}/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);
        fetch(
          `${baseURL}/coffees?category=${encodeURIComponent(data.category)}`,
        )
          .then((res) => res.json())
          .then((related) => {
            const filtered = related.filter((c) => c._id !== data._id);
            setRelatedCoffees(filtered);
          });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to fetch coffee data", "error");
      });
  }, [id]);

  return (
    <div className="px-6 md:px-12 lg:px-35 2xl:px-50 py-6 md:py-8 lg:py-10 2xl:py-14 bg-[#ffff]">
      {/* Main Coffee Info */}
      <div className="grid md:grid-cols-2 gap-10 items-center bg-[#eceae3bd] p-6 md:p-10">
        {/* Image Section */}
        <div className="relative group">
          <img src={coffee?.photo} alt={coffee?.name} className="w-full h-80" />

          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            {coffee?.category}
          </span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#331A15]">
            {coffee?.name}
          </h1>

          <p className="text-gray-600 leading-relaxed raleway">
            {coffee?.details}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm md:text-base raleway">
            <p>
              <span className="font-semibold text-[#331A15]">Chef:</span>{" "}
              {coffee?.chef}
            </p>

            <p>
              <span className="font-semibold text-[#331A15]">Supplier:</span>{" "}
              {coffee?.supplier}
            </p>

            <p>
              <span className="font-semibold text-[#331A15]">Taste:</span>{" "}
              {coffee?.taste}
            </p>

            <p>
              <span className="font-semibold text-[#331A15]">Category:</span>{" "}
              {coffee?.category}
            </p>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-[30px] md:text-[35px] font-bold text-[#E3B577]">
              ${coffee?.price}
            </span>

            <button className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-1 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group">
              <span>Buy Now</span>
              <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Related Coffees */}
      {relatedCoffees.length > 0 && (
        <div className="py-6 md:py-8 lg:py-10 2xl:py-14 ">
          <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg pb-2 md:pb-3 lg:pb-4 2xl:pb-5">
            More Coffees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCoffees.map((c) => (
              <Product key={c._id} coffee={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeInfo;
