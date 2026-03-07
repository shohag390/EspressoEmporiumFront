import { useState } from "react";
import { Link } from "react-router";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useEffect } from "react";
import Swal from "sweetalert2";

const MyCoffees = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setCoffeeData((prev) =>
                prev.filter((coffee) => coffee._id !== id),
              );
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
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

                {/* Actions */}
                <td className="py-3 px-4 border-b font-semibold">
                  <div className="flex items-center gap-6">
                    <Link
                      to={`/dashboard/updateCoffee/${coffee._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-8 flex items-center justify-center"
                    >
                      <MdEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(coffee._id)}
                      className="bg-red-500 hover:bg-red-600 text-white h-8 w-8 flex items-center justify-center"
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
