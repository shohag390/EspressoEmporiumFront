import { useState } from "react";
import Product from "../components/Products/Product";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import useProduct from "../hooks/useProduct";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuListFilter } from "react-icons/lu";
import Loading from "../shared/Loading";

const Manu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [view, setView] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const { coffeeData } = useProduct();

  const categories = [
    "All",
    ...new Set(coffeeData.map((item) => item.category)),
  ];

  let filteredCoffee = coffeeData.filter((coffee) => {
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
      matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearch
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
    <div className="bg-[#ffff] w-full px-6 md:px-12 lg:px-35 2xl:px-50 pt-3 md:pt-5 lg:pt-7 2xl:pt-8 pb-6 md:pb-8 lg:pb-10 2xl:pb-14">
      {/* Search Bar */}
      <div className="w-full flex items-center justify-center pb-3 md:pb-5 lg:pb-7 2xl:pb-8">
        <div
          data-aos="fade-up"
          className="h-[5vh] md:h-[6vh] lg:h-[7vh] w-full lg:w-[70%] flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5 bg-[#eceae3bd] px-5 text-[#1B1A1A]"
        >
          <FiSearch className="text-[25px] " />
          <input
            type="text"
            placeholder="Search your favorite coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-full focus:outline-0 text-[14px] md:text-[16px] raleway"
          />
        </div>
      </div>

      <div className="flex gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
        {/* Sidebar (Desktop) */}
        <div className="w-[25%] lg:flex lg:flex-col lg:gap-4 2xl:gap-5 hidden">
          {/* Categories */}
          <div data-aos="fade-up">
            <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
              Categories
            </h2>
            <div className="flex flex-col raleway">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 transition group flex items-center justify-between ${
                    selectedCategory === category
                      ? "bg-[#331A15] text-white"
                      : "bg-[#eceae3bd] hover:bg-[#E3B577]"
                  }`}
                >
                  <span>{category}</span>
                  <span>
                    <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price & Sort */}
          <div data-aos="fade-up">
            <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
              Filter & Sort
            </h2>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5 raleway">
              <div className="flex gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-4 py-2 bg-[#eceae3bd] focus:outline-0"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-4 py-2 bg-[#eceae3bd] focus:outline-0"
                />
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-4 py-2 bg-[#eceae3bd]"
              >
                <option value="">Sort</option>
                <option value="low">Low → High</option>
                <option value="high">High → Low</option>
              </select>
              <button
                onClick={resetFilters}
                className="w-full px-4 py-2 bg-[#331A15] hover:text-[#331A15] hover:bg-[#E3B577] text-[#ffff] flex items-center justify-between group duration-500"
              >
                <span>Reset</span>
                <span>
                  <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[75%]">
          {/* Title + Grid/List toggle */}
          <div className="flex items-center justify-between pb-2 md:pb-3 lg:pb-4 2xl:pb-5">
            <div data-aos="fade-up">
              <h1 className="text-[#331A15] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
                All Coffees
              </h1>
              <p className="raleway text-[14px] md:text-[16px]">
                {filteredCoffee.length} products found
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center gap-2 lg:gap-3"
            >
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
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden h-10 w-10 flex items-center justify-center bg-[#331A15] hover:bg-[#E3B577] text-white"
              >
                <LuListFilter />
              </button>
            </div>
          </div>

          {/* Products */}
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 lg:gap-4 2xl:gap-5"
                : "flex flex-col gap-4"
            }
          >
            {filteredCoffee.length > 0 ? (
              filteredCoffee.map((coffee) => (
                <Product key={coffee._id} coffee={coffee} view={view} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-3/4 max-w-xs p-6 h-full overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-800 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="w-full flex flex-col gap-2">
              {/* Categories */}
              <div>
                <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px]">
                  Categories
                </h2>
                <div className="flex flex-col raleway">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 transition group flex items-center justify-between ${
                        selectedCategory === category
                          ? "bg-[#331A15] text-white"
                          : "bg-[#eceae3bd] hover:bg-[#E3B577]"
                      }`}
                    >
                      <span>{category}</span>
                      <span>
                        <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Sort */}
              <div className="">
                <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px]">
                  Filter & Sort
                </h2>
                <div className="flex flex-col gap-2 raleway">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full px-4 py-2 bg-[#eceae3bd] focus:outline-0"
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full px-4 py-2 bg-[#eceae3bd] focus:outline-0"
                    />
                  </div>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full px-4 py-2 bg-[#eceae3bd]"
                  >
                    <option value="">Sort</option>
                    <option value="low">Low → High</option>
                    <option value="high">High → Low</option>
                  </select>
                  <button
                    onClick={resetFilters}
                    className="w-full px-4 py-2 bg-[#331A15] hover:text-[#331A15] hover:bg-[#E3B577] text-[#ffff] flex items-center justify-between group duration-500"
                  >
                    <span>Reset</span>
                    <span>
                      <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manu;
