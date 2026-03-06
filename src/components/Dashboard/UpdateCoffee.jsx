import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// Example coffee data (replace with API/backend later)
const initialCoffees = [
  {
    _id: "1",
    name: "Irish Coffee",
    chef: "Mr. Robin",
    supplier: "Irish Beans",
    taste: "Bold",
    category: "Special Coffee",
    details: "Coffee with cream.",
    photo: "https://i.pravatar.cc/150?img=32",
    price: 300,
  },
  {
    _id: "2",
    name: "Espresso",
    chef: "Mr. John",
    supplier: "Espresso Beans",
    taste: "Strong",
    category: "Regular",
    details: "Classic espresso shot.",
    photo: "https://i.pravatar.cc/150?img=33",
    price: 250,
  },
  {
    _id: "3",
    name: "Cappuccino",
    chef: "Ms. Anna",
    supplier: "Italian Beans",
    taste: "Mild",
    category: "Special Coffee",
    details: "Espresso with steamed milk.",
    photo: "https://i.pravatar.cc/150?img=34",
    price: 280,
  },
];

const UpdateCoffee = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    const selectedCoffee = initialCoffees.find((c) => c._id === id);
    if (selectedCoffee) {
      setCoffee(selectedCoffee);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoffee({ ...coffee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call API to update coffee
    alert("Coffee Updated!\n" + JSON.stringify(coffee, null, 2));
  };

  if (!coffee)
    return <div className="p-6 text-center">Loading coffee data...</div>;

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Update Coffee
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Photo Preview */}
        <div className="flex flex-col items-center">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-28 h-28 rounded-full border-4 border-orange-500 object-cover"
          />
          <input
            type="text"
            name="photo"
            value={coffee.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={coffee.name}
          onChange={handleChange}
          placeholder="Coffee Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          value={coffee.chef}
          onChange={handleChange}
          placeholder="Chef Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          value={coffee.supplier}
          onChange={handleChange}
          placeholder="Supplier"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          value={coffee.taste}
          onChange={handleChange}
          placeholder="Taste"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          value={coffee.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Details */}
        <textarea
          name="details"
          value={coffee.details}
          onChange={handleChange}
          placeholder="Details"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={coffee.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition mt-4"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
