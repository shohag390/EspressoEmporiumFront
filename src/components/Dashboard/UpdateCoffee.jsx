import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useProduct from "../../hooks/useProduct";

const UpdateCoffee = () => {
  const { id } = useParams();
  const { getSingleCoffee, updateCoffee, setCoffeeData } = useProduct();
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    getSingleCoffee(id).then((data) => setCoffee(data));
  }, [id, getSingleCoffee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    updateCoffee(id, updatedCoffee).then((data) => {
      if (data?.modifiedCount) {
        toast.success("Updated Coffee");
        setCoffeeData((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, ...updatedCoffee } : item,
          ),
        );
      }
    });
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Update Coffee
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Photo Preview */}
        <div className="flex flex-col items-center">
          <img
            src={coffee?.photo}
            alt="Image"
            className="w-28 h-28 rounded-full border-4 border-orange-500 object-cover"
          />
          <input
            type="text"
            name="photo"
            defaultValue={coffee?.photo}
            placeholder="Photo URL"
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          defaultValue={coffee?.name}
          placeholder="Coffee Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          defaultValue={coffee?.chef}
          placeholder="Chef Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          defaultValue={coffee?.supplier}
          placeholder="Supplier"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          defaultValue={coffee?.taste}
          placeholder="Taste"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          defaultValue={coffee?.category}
          placeholder="Category"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Details"
          defaultValue={coffee?.details}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={coffee?.price}
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
