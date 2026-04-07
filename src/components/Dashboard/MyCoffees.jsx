import { use, useState, useEffect } from "react";
import { Link } from "react-router";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useProduct from "../../hooks/useProduct";
import { AuthContext } from "../../context/AuthContext";

const MyCoffees = () => {
  const { coffeeData, setCoffeeData, deleteCoffee } = useProduct();
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const myCoffee = coffeeData?.filter(
    (coffee) => coffee?.emali === user?.email,
  );

  useEffect(() => {
    if (myCoffee) {
      setLoading(false);
    }
  }, [myCoffee]);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This coffee will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCoffee(id).then((data) => {
          if (data?.deletedCount) {
            Swal.fire("Deleted!", "Coffee deleted successfully.", "success");
            setCoffeeData((prev) => prev.filter((item) => item._id !== id));
          }
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
            {myCoffee.length > 0 ? (
              myCoffee.map((coffee, index) => (
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
                  <td className="py-3 px-4 border-b">
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/dashboard/updateCoffee/${coffee._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white h-8 w-8 flex items-center justify-center rounded"
                      >
                        <MdEdit />
                      </Link>

                      <button
                        onClick={() => handleDelete(coffee._id)}
                        className="bg-red-500 hover:bg-red-600 text-white h-8 w-8 flex items-center justify-center rounded"
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              //  Empty state
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No coffees added yet ☕
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCoffees;
