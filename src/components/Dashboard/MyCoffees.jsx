import React, { useState } from "react";
import { Link } from "react-router";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

// Example Coffee Data
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

const MyCoffees = () => {
  const [coffees, setCoffees] = useState(initialCoffees);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this coffee?")) {
      setCoffees(coffees.filter((coffee) => coffee._id !== id));
      alert("Coffee deleted successfully!");
    }
  };

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-6">
        My Coffees
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md border border-gray-200">
          <thead className="bg-orange-50">
            <tr>
              {["#", "Photo", "Name", "Chef", "Price", "Actions"].map(
                (header, i) => (
                  <th
                    key={i}
                    className="py-3 px-4 border-b text-left text-gray-700 font-semibold text-sm md:text-base"
                  >
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {coffees.map((coffee, index) => (
              <tr
                key={coffee._id}
                className={`transition duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:shadow-lg hover:bg-gray-100`}
              >
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">
                  <img
                    src={coffee.photo}
                    alt={coffee.name}
                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-md border"
                  />
                </td>
                <td className="py-3 px-4 border-b font-medium">
                  {coffee.name}
                </td>
                <td className="py-3 px-4 border-b">{coffee.chef}</td>

                <td className="py-3 px-4 border-b font-semibold">
                  $ {coffee.price}
                </td>

                {/* Actions */}
                <td className="py-3 px-4 border-b font-semibold">
                  <div className="flex items-center gap-6">
                    <Link
                      to={`/dashboard/updateCoffee/${coffee._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white h-4 w-4"
                    >
                      <MdEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(coffee._id)}
                      className="bg-red-500 hover:bg-red-600 text-white "
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCoffees;
