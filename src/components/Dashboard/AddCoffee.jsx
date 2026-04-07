import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import baseURL from "../../api/baseUrl";

const AddCoffee = () => {
  const { user } = useContext(AuthContext);
  const emali = user?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffee = Object.fromEntries(formData.entries());
    const newCoffee = {
      ...coffee,
      emali,
    };
    fetch(`${baseURL}/coffees`, {
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
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          placeholder="Chef Name"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          placeholder="Taste"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Details"
          rows="3"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Photo URL */}
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] py-2 px-3 lg:px-4 w-full text-[#242222] bg-[#E3B577] hover:bg-[#e9a956] transition-all duration-300 flex items-center justify-center gap-1 md:gap-2"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
