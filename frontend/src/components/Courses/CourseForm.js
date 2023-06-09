import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CourseForm = () => {
  //state of each form property
  const [courseName, setName] = useState("");
  const [otherCourseName, setOtherCourseName] = useState(""); //for custom course name
  const [price, setPrice] = useState(0.0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null); //error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if user selected custom course
    let customCourseName = courseName;
    if (courseName === "Other") {
      customCourseName = otherCourseName;
    }

    //new course obj
    const course = { courseName: customCourseName, price, date, location };

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
        <Form.Label>Course Name & Level</Form.Label>{" "}
        <i class="fa-solid fa-chevron-down"></i>
        <Form.Control
          as="select"
          value={courseName}
          onChange={(e) => setName(e.target.value)}
        >
          {" "}
          <option value="">Select Course...</option>
          <option value="First Aid Refresher">First Aid Refresher</option>
          <option value="Workplace First Aid Level 1">
            Workplace First Aid Level 1
          </option>
          <option value="Workplace First Aid Level 2">
            Workplace First Aid Level 2
          </option>
          <option value="Other">Other</option>
        </Form.Control>
        {courseName === "Other" && (
          <Form.Control
            type="text"
            placeholder="Enter a different course"
            value={otherCourseName}
            onChange={(e) => setOtherCourseName(e.target.value)}
            className="mt-2"
          />
        )}
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
          placeholder="01 Jan & 08 Jan..."
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>{" "}
        <i class="fa-solid fa-chevron-down"></i>
        <div>
          <Form.Control
            as="select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Region...</option>
            <option value="North Akl">NORTH</option>
            <option value="Central Akl">CENTRAL</option>
            <option value="South Akl">SOUTH</option>
            <option value="East Akl">EAST</option>
            <option value="West Akl">WEST</option>
            <option value="Tauranga">TGA</option>{" "}
          </Form.Control>
        </div>
      </Form.Group>

      <Button variant="fanzGreen" type="submit">
        Add
      </Button>
      {error && (
        <div className="error">
          <i class="fa-solid fa-circle-xmark"> </i> Add Course Failed <br />
          {error}
        </div>
      )}
    </Form>
  );
};

export default CourseForm;
