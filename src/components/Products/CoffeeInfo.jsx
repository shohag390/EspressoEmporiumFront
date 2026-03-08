import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeInfo = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [relatedCoffees, setRelatedCoffees] = useState([]);

  useEffect(() => {
    // Fetch selected coffee
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data);

        // Fetch related coffees by category
        fetch(
          `http://localhost:3000/coffees?category=${encodeURIComponent(data.category)}`,
        )
          .then((res) => res.json())
          .then((related) => {
            // Exclude the currently selected coffee
            const filtered = related.filter((c) => c._id !== data._id);
            setRelatedCoffees(filtered);
          });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to fetch coffee data", "error");
      });
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {/* Main Coffee Info */}
      <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={coffee?.photo}
            alt={coffee?.name}
            className="w-full h-80 md:h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-orange-600 mb-4">
              {coffee?.name}
            </h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Chef:</span> {coffee?.chef}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Supplier:</span>{" "}
              {coffee?.supplier}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Taste:</span> {coffee?.taste}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {coffee?.category}
            </p>
            <p className="text-gray-600 mt-4">{coffee?.details}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-green-600">
              ${coffee?.price}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Coffees */}
      {relatedCoffees.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Other {coffee?.category} Coffees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedCoffees.map((c) => (
              <Link
                to={`/coffee/${c._id}`}
                key={c._id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-gray-600 mt-1">${c.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeInfo;
