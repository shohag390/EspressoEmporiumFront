import Product from "./Product";
import image1 from "../../assets/images/p1.jpg";
import image2 from "../../assets/images/p2.webp";
import image3 from "../../assets/images/p3.jpg";
import image4 from "../../assets/images/p4.jpg";
import image5 from "../../assets/images/p5.webp";
import image6 from "../../assets/images/p6.jpg";
import image7 from "../../assets/images/p7.jpg";
import image8 from "../../assets/images/p8.jpg";
import image9 from "../../assets/images/p9.jpg";
import image10 from "../../assets/images/p10.jpg";
import image11 from "../../assets/images/p11.jpg";
import image12 from "../../assets/images/p12.jpg";
import image13 from "../../assets/images/p13.jpg";
import image14 from "../../assets/images/p14.jpg";
import image15 from "../../assets/images/p15.jpg";
import image16 from "../../assets/images/p16.jpg";
import image17 from "../../assets/images/p17.jpg";
import image18 from "../../assets/images/p18.jpg";
import image19 from "../../assets/images/p19.jpg";
import image20 from "../../assets/images/p20.jpg";
import image21 from "../../assets/images/p21.jpg";
import image22 from "../../assets/images/p22.jpg";
import image23 from "../../assets/images/p23.jpg";
import image24 from "../../assets/images/p24.jpg";
import image25 from "../../assets/images/p25.jpg";
import image26 from "../../assets/images/p26.jpg";
import image27 from "../../assets/images/p27.webp";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const coffeeData = [
  {
    _id: "1",
    name: "Americano",
    chef: "Mr. Shohag",
    supplier: "Coffee House",
    taste: "Strong",
    category: "Black Coffee",
    details: "Espresso with hot water.",
    photo: image1,
    price: 180,
  },
  {
    _id: "2",
    name: "Latte",
    chef: "Mr. Rahim",
    supplier: "Latte Supplier",
    taste: "Milky",
    category: "Milk Coffee",
    details: "Espresso with steamed milk.",
    photo: image2,
    price: 220,
  },
  {
    _id: "3",
    name: "Cappuccino",
    chef: "Mr. Karim",
    supplier: "Coffee World",
    taste: "Creamy",
    category: "Milk Coffee",
    details: "Espresso with milk foam.",
    photo: image3,
    price: 240,
  },
  {
    _id: "4",
    name: "Espresso",
    chef: "Mr. Jahid",
    supplier: "Espresso Supplier",
    taste: "Bitter",
    category: "Black Coffee",
    details: "Strong concentrated coffee.",
    photo: image4,
    price: 160,
  },
  {
    _id: "5",
    name: "Mocha",
    chef: "Mr. Hasan",
    supplier: "Mocha Hub",
    taste: "Chocolate",
    category: "Chocolate Coffee",
    details: "Espresso with milk & chocolate.",
    photo: image5,
    price: 260,
  },
  {
    _id: "6",
    name: "Macchiato",
    chef: "Mr. Fahim",
    supplier: "Coffee Bar",
    taste: "Sweet",
    category: "Special Coffee",
    details: "Espresso with little milk.",
    photo: image6,
    price: 230,
  },
  {
    _id: "7",
    name: "Flat White",
    chef: "Mr. Anik",
    supplier: "Flat Coffee Co",
    taste: "Smooth",
    category: "Milk Coffee",
    details: "Espresso with microfoam.",
    photo: image7,
    price: 250,
  },
  {
    _id: "8",
    name: "Irish Coffee",
    chef: "Mr. Robin",
    supplier: "Irish Beans",
    taste: "Bold",
    category: "Special Coffee",
    details: "Coffee with cream.",
    photo: image8,
    price: 300,
  },
];

const Products = () => {
  return (
    <div className="px-6 md:px-12 lg:px-35 2xl:px-50 products py-6 md:py-8 lg:py-10 2xl:py-14">
      <div className="text-center pb-5 md:pb-6 lg:pb-7 2xl:pb-8">
        <p className="text-[#1B1A1A] raleway text-[14px] md:text-[16px]">
          --- Sip & Savor ---
        </p>
        <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg">
          Our Popular Products
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
        {coffeeData.map((coffee) => (
          <Product key={coffee?._id} coffee={coffee} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-10">
        <Link
          to={"/manu"}
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-.5 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group"
        >
          <span> All Coffee</span>
          <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
