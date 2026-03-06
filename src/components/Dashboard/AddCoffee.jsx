import React, { useState } from "react";

const AddCoffee = () => {
  const [coffee, setCoffee] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
    price: "",
  });

  const handleChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coffee Data:", coffee);
    alert("Coffee Added!");
    // এখানে API call বা backend logic যাবে
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Add New Coffee
      </h1>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Coffee Name"
          value={coffee.name}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          placeholder="Chef Name"
          value={coffee.chef}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={coffee.supplier}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          placeholder="Taste"
          value={coffee.taste}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={coffee.category}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Details"
          value={coffee.details}
          onChange={handleChange}
          rows="3"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Photo URL */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={coffee.photo}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={coffee.price}
          onChange={handleChange}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition mt-2"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
