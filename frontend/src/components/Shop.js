/*

-> A Shop component that displays a list of products. 
-> Fetches the products data from Express using the useEffect hook
-> An empty dependency array ([]) ensures that the fetch is only executed once when the component is first mounted.
-> Once the products data is fetched and stored in the products state variable using the useState hook, 
   it is rendered as a list of ProductDetails components using the map() method.

-> Each ProductDetails component is passed a product object as a prop,
   and a unique key prop based on the _id property of the product object. 
   The key prop is required to efficiently render the list of components.

JS 06/may/2023

*/

//SHOP COMPONENT//
import { useEffect } from "react";
import React from "react";

//import other components to nest inside this component
import ProductDetails from "../components/ProductDetail";
//context hook
import { useProductsContext } from "../hooks/useProductsContext";

const Shop = () => {
  const { products, dispatch } = useProductsContext();

  //useeffect hook
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      //check response is ok
      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="Shop">
      <div className="products">
        {products &&
          products.map((product) => (
            <ProductDetails key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
