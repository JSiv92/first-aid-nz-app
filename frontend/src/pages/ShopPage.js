//blank react component for home page
import React from "react";

//components
import PageHeading from "../components/PageHeading";
import Shop from "../components//Shop/Shop.js";
import ProductForm from "../components/Shop/ProductForm.js";

const ShopPage = () => {
  return (
    <>
      <div className="page">
        <div className="content">
          <PageHeading text="Our Products" />
          <Shop />
        </div>
        <ProductForm />
      </div>
    </>
  );
};

export default ShopPage;
