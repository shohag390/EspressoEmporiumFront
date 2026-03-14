import { useState } from "react";
import Product from "../components/Products/Product";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import useProduct from "../hooks/useProduct";
import { FiSearch } from "react-icons/fi";

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
    <div className="bg-[#ffff] w-full px-6 md:px-12 lg:px-35 2xl:px-50 py-6 md:py-8 lg:py-10 2xl:py-14">
      {/* Search Bar */}
      <div className="">
        <div className="">
          <FiSearch className="" />
          <input
            type="text"
            placeholder="Search your favorite coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=""
          />
        </div>
      </div>

      <div className="">
        {/* Sidebar (Desktop) */}
        <div className="">
          {/* Categories */}
          <div className="">
            <h2 className="">Categories</h2>
            <div className="">
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

          {/* Price & Sort */}
          <div className="">
            <h2 className="">Filter & Sort</h2>
            <div className="">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className=""
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className=""
              />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className=""
              >
                <option value="">Sort</option>
                <option value="low">Low → High</option>
                <option value="high">High → Low</option>
              </select>
              <button onClick={resetFilters} className="">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="">
          {/* Title + Grid/List toggle */}
          <div className="">
            <div>
              <h1 className="">All Coffees</h1>
              <p className="">{filteredCoffee.length} products found</p>
            </div>

            <div className="">
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
                className={`h-10 w-10 flex items-center justify-center ml-2 ${
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

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-3 py-2 rounded-md transition ${
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

            {/* Price & Sort */}
            <div className="">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border px-3 py-2 w-full"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border px-3 py-2 w-full"
              />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border px-3 py-2 w-full"
              >
                <option value="">Sort</option>
                <option value="low">Low → High</option>
                <option value="high">High → Low</option>
              </select>
            </div>

            <button
              onClick={() => {
                resetFilters();
                setShowFilters(false);
              }}
              className=""
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manu;
