import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import baseURL from "../api/baseUrl";

const ProductProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState([]);

  //   Get All Data
  useEffect(() => {
    fetch(`${baseURL}/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);

  // Load Single Coffee
  const getSingleCoffee = async (id) => {
    return fetch(`${baseURL}/coffees/${id}`).then((res) => res.json());
  };

  // Delete Coffee (API only)
  const deleteCoffee = async (id) => {
    return fetch(`${baseURL}/coffees/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  const updateCoffee = async (id, updatedCoffee) => {
    return fetch(`${baseURL}/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    }).then((res) => res.json());
  };

  const productInfo = {
    coffeeData,
    setCoffeeData,
    getSingleCoffee,
    deleteCoffee,
    updateCoffee,
  };

  return <ProductContext value={productInfo}>{children}</ProductContext>;
};

export default ProductProvider;
