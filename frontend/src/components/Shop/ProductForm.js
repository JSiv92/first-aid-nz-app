import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useProductsContext } from "../../hooks/useProductsContext";

import "./ProductForm.css";

const ProductForm = () => {
  //invoke custom hook
  const { dispatch } = useProductsContext();
  //state of each form property
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //new product obj
    const product = { name, price, description, imgUrl };

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPrice(0.0);
      setDesc("");
      setImgUrl("");
      setError(null);

      console.log("new product added", json);

      dispatch({ type: "CREATE_PRODUCT", payload: json });
    }
  };

  return (
    <Form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Product:</h3>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </Form.Group>

      <Button variant="fanzGreen" type="submit">
        Add
      </Button>
      {error && <div className="error">{error}</div>}
    </Form>
  );
};

export default ProductForm;
