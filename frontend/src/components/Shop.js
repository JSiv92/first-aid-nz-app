//shop page
import { useEffect, useState } from "react";
import React from "react";

//components
import ProductDetails from "../components/ProductDetail";

const Shop = () => {
  const [products, setProducts] = useState(null);

  //useeffect hook fires function ONCE when component is rendered (empty array)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      //check response is ok
      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

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
