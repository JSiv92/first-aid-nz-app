/*
-> Individual Product Card
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { Context } from "../../context/CartContext";
import { useProductsContext } from "../../hooks/useProductsContext";

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(Context); //cart context
  const { dispatch: productDispatch } = useProductsContext(); //products context

  const handleDelete = async () => {
    const response = await fetch("api/products/" + product._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      const updatedResponse = await fetch("api/products");
      const updatedJson = await updatedResponse.json();
      //get products of type 'product'
      const products = updatedJson.filter(
        (product) => product.type === "product"
      );
      productDispatch({ type: "DELETE_PRODUCT", payload: json });
      productDispatch({ type: "SET_PRODUCTS", payload: products }); //refresh products list
    }
  };

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
        </Button>{" "}
        <Button onClick={handleDelete} variant="danger">
          <i className="fa-solid fa-xmark fa-lg"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
