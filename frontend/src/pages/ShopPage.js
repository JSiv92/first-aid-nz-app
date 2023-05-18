//blank react component for home page
import React from "react";

//components
import Shop from "../components/Shop.js";
import ProductForm from "../components/ProductForm.js";

const ShopPage = () => {
  return (
    <>
      <div className="page">
        <h2 style={{ color: "white" }}>Shop</h2>
        <Shop />
        <ProductForm />
      </div>
    </>
  );
};

export default ShopPage;
