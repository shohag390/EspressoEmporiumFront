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
        <div className="flex flex-col items-center gap-4">
          <img
            src={coffee?.photo}
            alt="Image"
            className="w-28 h-28 rounded-full border-4 border-[#E3B577] object-cover"
          />
          <input
            type="text"
            name="photo"
            defaultValue={coffee?.photo}
            placeholder="Photo URL"
            className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
          />
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          defaultValue={coffee?.name}
          placeholder="Coffee Name"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Chef */}
        <input
          type="text"
          name="chef"
          defaultValue={coffee?.chef}
          placeholder="Chef Name"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Supplier */}
        <input
          type="text"
          name="supplier"
          defaultValue={coffee?.supplier}
          placeholder="Supplier"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Taste */}
        <input
          type="text"
          name="taste"
          defaultValue={coffee?.taste}
          placeholder="Taste"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          defaultValue={coffee?.category}
          placeholder="Category"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Details"
          defaultValue={coffee?.details}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={coffee?.price}
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
        />

        <button
          type="submit"
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] py-2 px-3 lg:px-4 w-full text-[#242222] bg-[#E3B577] hover:bg-[#e9a956] transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 group"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
