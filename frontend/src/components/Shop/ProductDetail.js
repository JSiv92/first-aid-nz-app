/*
-> Individual Product Card
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { Context } from "../../context/CartContext";
import { useProductsContext } from "../../hooks/useProductsContext";

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(Context); //cart context
  const { dispatch: productDispatch } = useProductsContext(); //products context
  const [addedToCart, setAddedToCart] = useState(false); // state to control the added to cart popup

  // delete product and refresh state
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
          variant="success"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
            setAddedToCart(true);
            //time out on added to cart icon
            setTimeout(() => {
              setAddedToCart(false);
            }, 3000);
          }}
        >
          {addedToCart ? (
            <>
              <i class="fa-solid fa-check fa-md"></i> Added to Cart
            </>
          ) : (
            <>
              <i class="fa-solid fa-cart-plus fa-md"></i> Add to Cart
            </>
          )}{" "}
        </Button>{" "}
        <Button onClick={handleDelete} variant="danger">
          <i className="fa-solid fa-xmark fa-md"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
