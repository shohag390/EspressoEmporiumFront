import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import baseURL from "../../api/baseUrl";

const AllCoffees = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-6">
        All Coffees
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md border border-gray-200">
          <thead className="bg-orange-50">
            <tr>
              {["#", "Photo", "Name", "Chef", "Price"].map((header, i) => (
                <th
                  key={i}
                  className="py-3 px-4 border-b text-left text-gray-700 font-semibold text-sm md:text-base"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {coffeeData.map((coffee, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCoffees;
