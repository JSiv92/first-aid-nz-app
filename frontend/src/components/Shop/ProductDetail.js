import React from "react";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { Context } from "../../context/CartContext";
import { useProductsContext } from "../../hooks/useProductsContext";

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(Context); // cart context as dispatch
  const { dispatch: productDispatch } = useProductsContext(); // products context as productDispatch
  const [addedToCart, setAddedToCart] = useState(false); // state to control the added to cart popup
  const [cartItemCount, setCartItemCount] = useState(0); // counter to track the number of items in the cart

  const image = product.imageUrl;

  //handle add to cart
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: {
          ...product,
        },
      },
    });
    setAddedToCart(true);
    setCartItemCount(cartItemCount + 1); // increment the cart item count
    setTimeout(() => {
      setAddedToCart(false);
    }, 5000);
  };

  // delete product and refresh state
  const handleDelete = async () => {
    const response = await fetch("api/products/" + product._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      const updatedResponse = await fetch("api/products");
      const updatedJson = await updatedResponse.json();
      // get products of type 'product'
      const products = updatedJson.filter(
        (product) => product.type === "product"
      );
      productDispatch({ type: "DELETE_PRODUCT", payload: json });
      productDispatch({ type: "SET_PRODUCTS", payload: products }); // refresh products list
    }
  };

  return (
    <div className="product-details h-100">
      <h4 className="text-center">{product.name}</h4>
      <p>
        <strong>${product.price}</strong>
      </p>

      <img className="m-3 p-3" alt="placeholder" src={image}></img>
      <p>{product.description}</p>
      <div className="mt-auto d-flex justify-content-between align-items-center gap-2">
        <Button variant="success" onClick={handleAddToCart}>
          {addedToCart ? (
            <>
              <i className="fa-solid fa-check fa-md"></i> {cartItemCount} Added
              to Cart
            </>
          ) : (
            <>
              <i className="fa-solid fa-cart-plus fa-md"></i> Add to Cart
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
