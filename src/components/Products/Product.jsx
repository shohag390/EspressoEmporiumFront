import React from "react";

const Product = ({ coffee }) => {
  console.log(coffee);

  return (
    <div className="bg-[#eceae394]">
      <div>
        <img src={coffee?.photo} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Product;
