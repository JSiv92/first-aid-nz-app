/*
-> Individual Product Card
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { Context } from "../context/CartContext";

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(Context);
  return (
    <div className="product-details h-100">
      <h4>{product.name}</h4>
      <p>
        <strong>${product.price}</strong>
      </p>
      <p>{product.description}</p>
      <img
        alt="placeholder"
        src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
      ></img>
      <br />
      <div className="">
        <Button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          variant="success"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
