import { useState } from "react";
import Product from "../components/Products/Product";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import image1 from "../assets/images/p1.jpg";
import image2 from "../assets/images/p2.webp";
import image3 from "../assets/images/p3.jpg";
import image4 from "../assets/images/p4.jpg";
import image5 from "../assets/images/p5.webp";
import image6 from "../assets/images/p6.jpg";
import image7 from "../assets/images/p7.jpg";
import image8 from "../assets/images/p8.jpg";
import image9 from "../assets/images/p9.jpg";
import image10 from "../assets/images/p10.jpg";
import image11 from "../assets/images/p11.jpg";
import image12 from "../assets/images/p12.jpg";
import image13 from "../assets/images/p13.jpg";
import image14 from "../assets/images/p14.jpg";
import image15 from "../assets/images/p15.jpg";
import image16 from "../assets/images/p16.jpg";
import image17 from "../assets/images/p17.jpg";
import image18 from "../assets/images/p18.jpg";
import image19 from "../assets/images/p19.jpg";
import image20 from "../assets/images/p20.jpg";
import image21 from "../assets/images/p21.jpg";
import image22 from "../assets/images/p22.jpg";
import image23 from "../assets/images/p23.jpg";
import image24 from "../assets/images/p24.jpg";
import image25 from "../assets/images/p25.jpg";
import image26 from "../assets/images/p26.jpg";
import image27 from "../assets/images/p27.webp";

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
  {
    _id: "9",
    name: "Affogato",
    chef: "Mr. Sumon",
    supplier: "Dessert Coffee",
    taste: "Sweet & Bitter",
    category: "Dessert Coffee",
    details: "Espresso over ice cream.",
    photo: image9,
    price: 280,
  },
  {
    _id: "10",
    name: "Cold Brew",
    chef: "Mr. Tanvir",
    supplier: "Cold Coffee Ltd",
    taste: "Rich",
    category: "Cold Coffee",
    details: "Cold extracted coffee.",
    photo: image10,
    price: 210,
  },
  {
    _id: "11",
    name: "Turkish Coffee",
    chef: "Mr. Rafi",
    supplier: "Turkish Beans",
    taste: "Strong",
    category: "Black Coffee",
    details: "Finely ground coffee.",
    photo: image11,
    price: 270,
  },
  {
    _id: "12",
    name: "Caramel Latte",
    chef: "Mr. Bappy",
    supplier: "Sweet Brew",
    taste: "Sweet",
    category: "Flavored Coffee",
    details: "Latte with caramel.",
    photo: image12,
    price: 260,
  },
  {
    _id: "13",
    name: "Vanilla Latte",
    chef: "Mr. Sohan",
    supplier: "Flavor Hub",
    taste: "Vanilla",
    category: "Flavored Coffee",
    details: "Latte with vanilla syrup.",
    photo: image13,
    price: 250,
  },
  {
    _id: "14",
    name: "Hazelnut Coffee",
    chef: "Mr. Imran",
    supplier: "Nutty Beans",
    taste: "Nutty",
    category: "Flavored Coffee",
    details: "Coffee with hazelnut flavor.",
    photo: image14,
    price: 240,
  },
  {
    _id: "15",
    name: "Iced Latte",
    chef: "Mr. Tarek",
    supplier: "Cool Brew",
    taste: "Cold & Milky",
    category: "Cold Coffee",
    details: "Cold milk and espresso.",
    photo: image15,
    price: 230,
  },
  {
    _id: "16",
    name: "Iced Mocha",
    chef: "Mr. Jony",
    supplier: "Choco Chill",
    taste: "Chocolate",
    category: "Cold Coffee",
    details: "Cold mocha drink.",
    photo: image16,
    price: 270,
  },
  {
    _id: "17",
    name: "Americano XL",
    chef: "Mr. Arif",
    supplier: "Coffee House",
    taste: "Strong",
    category: "Black Coffee",
    details: "Large Americano.",
    photo: image17,
    price: 200,
  },
  {
    _id: "18",
    name: "Coconut Latte",
    chef: "Mr. Naim",
    supplier: "Tropical Beans",
    taste: "Coconut",
    category: "Special Coffee",
    details: "Latte with coconut flavor.",
    photo: image18,
    price: 280,
  },
  {
    _id: "19",
    name: "White Mocha",
    chef: "Mr. Farhan",
    supplier: "Mocha Hub",
    taste: "Sweet",
    category: "Chocolate Coffee",
    details: "White chocolate mocha.",
    photo: image19,
    price: 290,
  },
  {
    _id: "20",
    name: "Black Iced Coffee",
    chef: "Mr. Rakib",
    supplier: "Ice Brew",
    taste: "Strong",
    category: "Cold Coffee",
    details: "Cold black coffee.",
    photo: image20,
    price: 190,
  },
  {
    _id: "21",
    name: "Double Espresso",
    chef: "Mr. Sayed",
    supplier: "Espresso Supplier",
    taste: "Very Strong",
    category: "Black Coffee",
    details: "Two shots espresso.",
    photo: image21,
    price: 210,
  },
  {
    _id: "22",
    name: "Mint Mocha",
    chef: "Mr. Nirob",
    supplier: "Fresh Beans",
    taste: "Minty",
    category: "Special Coffee",
    details: "Mocha with mint.",
    photo: image22,
    price: 300,
  },
  {
    _id: "23",
    name: "Butterscotch Latte",
    chef: "Mr. Babu",
    supplier: "Sweet Brew",
    taste: "Sweet",
    category: "Flavored Coffee",
    details: "Latte with butterscotch.",
    photo: image23,
    price: 270,
  },
  {
    _id: "24",
    name: "Spanish Latte",
    chef: "Mr. Saif",
    supplier: "Euro Beans",
    taste: "Sweet & Milky",
    category: "Milk Coffee",
    details: "Latte with condensed milk.",
    photo: image24,
    price: 260,
  },
  {
    _id: "25",
    name: "Chocolate Frappe",
    chef: "Mr. Nahid",
    supplier: "Chill Café",
    taste: "Chocolate",
    category: "Cold Coffee",
    details: "Blended iced chocolate coffee.",
    photo: image25,
    price: 310,
  },
  {
    _id: "26",
    name: "Honey Latte",
    chef: "Mr. Reza",
    supplier: "Nature Brew",
    taste: "Honey Sweet",
    category: "Flavored Coffee",
    details: "Latte with honey.",
    photo: image26,
    price: 250,
  },
  {
    _id: "27",
    name: "Almond Cappuccino",
    chef: "Mr. Zihad",
    supplier: "Nutty Beans",
    taste: "Almond",
    category: "Special Coffee",
    details: "Cappuccino with almond milk.",
    photo: image27,
    price: 290,
  },
];

const Manu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [view, setView] = useState("grid");

  const categories = [
    "All",
    ...new Set(coffeeData.map((item) => item.category)),
  ];
  // console.log(categories);

  let filteredCoffee = coffeeData.filter((coffee) => {
    // console.log(coffee);

    const matchesCategory =
      selectedCategory === "All" || coffee.category === selectedCategory;

    const matchesSearch = coffee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesMinPrice =
      minPrice === "" || coffee.price >= parseInt(minPrice);

    const matchesMaxPrice =
      maxPrice === "" || coffee.price <= parseInt(maxPrice);

    return (
      matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice
    );
  });

  if (sortOrder === "low") {
    filteredCoffee.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    filteredCoffee.sort((a, b) => b.price - a.price);
  }

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setMinPrice("");
    setMaxPrice("");
    setSortOrder("");
  };

  return (
    <div className="bg-[#ffff] px-6 md:px-12 lg:px-24 py-10">
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search coffee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-[#331A15] px-4 py-3 focus:ring-2 focus:ring-[#E3B577] outline-none"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-md lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold mb-4 text-[#331A15]">
              Categories
            </h2>

            <div className="flex flex-col gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left px-4 py-2 rounded-md transition ${
                    selectedCategory === category
                      ? "bg-[#331A15] text-white"
                      : "bg-gray-100 hover:bg-[#E3B577]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/4">
          {/* Top Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#331A15]">
                Our All Coffees
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredCoffee.length} products found
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border px-3 py-2 w-24"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border px-3 py-2 w-24"
              />

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border px-3 py-2"
              >
                <option value="">Sort</option>
                <option value="low">Low → High</option>
                <option value="high">High → Low</option>
              </select>

              <button
                onClick={resetFilters}
                className="bg-[#331A15] text-white px-4 py-2 hover:bg-[#E3B577] duration-300"
              >
                Reset
              </button>

              <button
                onClick={() => setView("grid")}
                className={`h-10 w-10 flex items-center justify-center ${
                  view === "grid" ? "bg-[#E3B577]" : "bg-[#331A15]"
                } text-white`}
              >
                <BsGrid3X3GapFill />
              </button>

              <button
                onClick={() => setView("list")}
                className={`h-10 w-10 flex items-center justify-center ${
                  view === "list" ? "bg-[#E3B577]" : "bg-[#331A15]"
                } text-white`}
              >
                <FaList />
              </button>
            </div>
          </div>

          {/* Products */}
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredCoffee.length > 0 ? (
              filteredCoffee.map((coffee) => (
                <Product key={coffee._id} coffee={coffee} view={view} />
              ))
            ) : (
              <p className="text-red-500 text-lg">No coffee found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;
