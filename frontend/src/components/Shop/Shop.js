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
import ProductDetails from "../Shop/ProductDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//context hook
import { useProductsContext } from "../../hooks/useProductsContext";

import "./Shop.css";

const Shop = () => {
  const { products, dispatch } = useProductsContext();

  // Function to add items to the cart

  //fetch products from db useeffect hook using the productscontext if result ok
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
      <div className="">
        <Row className="g-4">
          <Col className="" sm={12} md={6}>
            <div className="shopInfo">
              <h4>
                <i class="fa-solid fa-briefcase-medical"></i> Products and
                Services
              </h4>
              <hr />
              <p>
                First Aid NZ offer a range of Physio-Control Lifepac
                Defibrillators (for sale or rent), defibrillator accessories and
                first aid supplies. We believe anyone can be a heartsaver with
                our AED training.
              </p>
              <p>
                Our products are of the best quality and are competitively
                priced.
              </p>
              <p>
                We are also able to offer regular servicing of your first aid
                stations and kits at a small charge.
              </p>
              <p>
                For all product and service related enquiries:
                <br />
                <strong>Email us - info@firstaidnz.co.nz</strong>
              </p>
            </div>
          </Col>

          <Col className="">
            <div className="defibInfo">
              <h4>
                <i class="fa-solid fa-heart-circle-bolt"></i> Defibrillators
              </h4>
              <hr />
              <p>Not all AED Defibrillators are made the same.</p>

              <p>
                Our <strong>Lifepac AED Defibrillators</strong> carry an 8 year
                warranty with Servicing and Calibration service available in NZ.
              </p>
              <p>
                Lifepac Defibrillators can achieve shocks of up to 360 joules.
                Study results from 2017 show shocks at a lower Joule rating may
                not be enough (Open Access Emergency Medicine March 2017).
              </p>
              <p>
                Lifepac Defibrillators are used by Ambulance services, Fire
                Service and Hospitals throughout NZ.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="products h-100">
        <Row className="g-4" sm={12}>
          {products &&
            products.map((product) => (
              <Col>
                <ProductDetails key={product._id} product={product} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Shop;
