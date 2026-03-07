import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch(`http://localhost:3000/coffees`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Added Coffee");
        }
        form.reset();
      })
      .catch((error) => {
        toast.error("Failed to add coffee");
      });
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
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          placeholder="Chef Name"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          placeholder="Taste"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Details"
          rows="3"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Photo URL */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
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
