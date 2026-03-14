import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import baseURL from "../api/baseUrl";

const ProductProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get All Data
  useEffect(() => {
    setLoading(true);
    fetch(`${baseURL}/coffees`)
      .then((res) => res.json())
      .then((data) => {
        setCoffeeData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Load Single Coffee
  const getSingleCoffee = async (id) => {
    setLoading(true);
    const res = await fetch(`${baseURL}/coffees/${id}`);
    const data = await res.json();
    setLoading(false);
    return data;
  };

  // Delete Coffee
  const deleteCoffee = async (id) => {
    const res = await fetch(`${baseURL}/coffees/${id}`, {
      method: "DELETE",
    });
    return res.json();
  };

  // Update Coffee
  const updateCoffee = async (id, updatedCoffee) => {
    const res = await fetch(`${baseURL}/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    });
    return res.json();
  };

  const productInfo = {
    coffeeData,
    setCoffeeData,
    loading,
    setLoading,
    getSingleCoffee,
    deleteCoffee,
    updateCoffee,
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
