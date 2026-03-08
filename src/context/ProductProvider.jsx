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

  const productInfo = { coffeeData };

  return <ProductContext value={productInfo}>{children}</ProductContext>;
};

export default ProductProvider;
