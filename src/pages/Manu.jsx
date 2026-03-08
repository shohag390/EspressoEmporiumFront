import { useState } from "react";
import Product from "../components/Products/Product";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { useEffect } from "react";
import useProduct from "../hooks/useProduct";

const Manu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [view, setView] = useState("grid");
  const { coffeeData } = useProduct();

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
          <div className="bg-white p-6 rounded-xl shadow-md">
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
              <h1 className="text-3xl font-bold text-[#331A15]">All Coffees</h1>
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
