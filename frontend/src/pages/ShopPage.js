//blank react component for home page
import React from "react";

//components
import PageHeading from "../components/PageHeading";
import Shop from "../components/Shop.js";
import ProductForm from "../components/ProductForm.js";

const ShopPage = () => {
  return (
    <>
      <div className="page">
        <div className="content">
          <PageHeading text="Our Products" />
          <Shop />
          <ProductForm />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
