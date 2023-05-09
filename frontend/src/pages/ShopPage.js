//blank react component for home page
import React from "react";

//components
import Shop from "../components/Shop.js";

const ShopPage = () => {
  return (
    <>
      <div className="page">
        <h2 style={{ color: "white" }}>Shop</h2>
        <Shop />
      </div>
    </>
  );
};

export default ShopPage;
