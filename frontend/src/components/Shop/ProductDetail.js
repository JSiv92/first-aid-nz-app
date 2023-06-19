import React from "react";
import Button from "react-bootstrap/Button";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/CartContext";
import { useProductsContext } from "../../hooks/useProductsContext";

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(Context); // cart context as dispatch
  const { dispatch: productDispatch } = useProductsContext(); // products context as productDispatch
  const [addedToCart, setAddedToCart] = useState(false); // state to control the added to cart popup

  // fetch price from stripe api
  const [convertedPrice, setConvertedPrice] = useState(null);

  useEffect(() => {
    const fetchConvertedPrice = async () => {
      try {
        const response = await fetch(`/api/convert-price/${product.price}`);
        const data = await response.json();
        setConvertedPrice(data.convertedPrice);
      } catch (error) {
        console.log(error);
      }
    };

    fetchConvertedPrice();
  }, [product.price]);

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
      <h4>{product.name}</h4>
      <p>
        <strong>${convertedPrice}</strong>
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
            // timeout on added to cart icon
            setTimeout(() => {
              setAddedToCart(false);
            }, 3000);
          }}
        >
          {addedToCart ? (
            <>
              <i className="fa-solid fa-check fa-md"></i> Added to Cart
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
