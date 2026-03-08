import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import baseURL from "../api/baseUrl";

const ProductProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState([]);

  //   Get Data
  useEffect(() => {
    fetch(`${baseURL}/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);

  // Delete Coffee (API only)
  const deleteCoffee = async (id) => {
    return fetch(`${baseURL}/coffees/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  const productInfo = {
    coffeeData,
    setCoffeeData,
    deleteCoffee,
    updateCoffee,
  };

  return <ProductContext value={productInfo}>{children}</ProductContext>;
};

export default ProductProvider;
