import Product from "./Product";
import image1 from "../../assets/images/product1.png";
import image2 from "../../assets/images/product2.png";
import image3 from "../../assets/images/product3.png";
import image4 from "../../assets/images/product4.png";
import image5 from "../../assets/images/product5.png";
import image6 from "../../assets/images/product6.png";

const coffeeData = [
  {
    _id: "1",
    name: "Americano",
    chef: "Shohag",
    supplier: "Coffee House",
    taste: "Strong",
    category: "Black Coffee",
    details: "Americano is made with espresso and hot water.",
    photo: image1,
  },
  {
    _id: "2",
    name: "Latte",
    chef: "Mr. Rahim",
    supplier: "Latte Supplier",
    taste: "Milky",
    category: "Milk Coffee",
    details: "Latte is made with espresso and steamed milk.",
    photo: image2,
  },
  {
    _id: "3",
    name: "Cappuccino",
    chef: "Mr. Karim",
    supplier: "Coffee World",
    taste: "Creamy",
    category: "Milk Coffee",
    details: "Cappuccino is espresso with milk foam.",
    photo: image3,
  },
  {
    _id: "4",
    name: "Espresso",
    chef: "Mr. Jahid",
    supplier: "Espresso Supplier",
    taste: "Bitter",
    category: "Black Coffee",
    details: "Espresso is a concentrated coffee brewed by forcing hot water.",
    photo: image4,
  },
  {
    _id: "5",
    name: "Mocha",
    chef: "Mr. Hasan",
    supplier: "Mocha Hub",
    taste: "Chocolate",
    category: "Chocolate Coffee",
    details: "Mocha is a mix of espresso, milk, and chocolate.",
    photo: image5,
  },
  {
    _id: "6",
    name: "Macchiato",
    chef: "Mr. Fahim",
    supplier: "Coffee Bar",
    taste: "Sweet",
    category: "Special Coffee",
    details: "Macchiato is espresso with a small amount of milk.",
    photo: image6,
  },
];

const Products = () => {
  return (
    <div className="px-6 md:px-12 lg:px-45 2xl:px-50 products py-6 md:py-8 lg:py-10 2xl:py-14">
      <div className="text-center pb-5 md:pb-6 lg:pb-7 2xl:pb-8">
        <p className="text-[#1B1A1A] raleway text-[14px] md:text-[16px]">
          --- Sip & Savor ---
        </p>
        <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg">
          Our Popular Products
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-7 2xl:gap-8">
        {coffeeData.map((coffee) => (
          <Product key={coffee?._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Products;
