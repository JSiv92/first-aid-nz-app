import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CourseForm = () => {
  //state of each form property
  const [courseName, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //new course obj
    const course = { courseName, price, date, location };

    const response = await fetch("/api/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    //reset fields if new course accepted
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPrice(0.0);
      setDate("");
      setLocation("");
      setError(null);

      console.log("new course added", json);
    }
  };

  return (
    <Form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Course:</h3>

      <Form.Group className="mb-3">
        <Form.Label>Course Name & Level</Form.Label>
        <Form.Control
          type="text"
          placeholder="Course"
          value={courseName}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Date(s)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="NORTHAKL,SOUTHAKL,EASTAKL,WESTAKL,TGA"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button variant="fanzGreen" type="submit">
        Add
      </Button>
      {error && <div className="error">{error}</div>}
    </Form>
  );
};

export default CourseForm;
