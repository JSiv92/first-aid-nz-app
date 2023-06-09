import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PostForm.css";
import Container from "react-bootstrap/esm/Container";
import { motion } from "framer-motion";

const PostForm = () => {
  //state of each form property
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [courseValue, setCourseValue] = useState("");
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State variable for the popup

  const handleSubmit = async (e) => {
    e.preventDefault();

    //new course obj
    const course = { author, message, course: courseValue };

    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    //reset fields if new post accepted
    if (!response.ok) {
      setError(json.error);
      setShowPopup(false); // Reset the popup state
    }
    if (response.ok) {
      setCourseValue("");
      setMessage("");
      setAuthor("");
      setError(null);
      setShowPopup(true); // Show the popup

      console.log("new post added", json);
    }
  };

  return (
    <Form className="m-1" onSubmit={handleSubmit}>
      <h3>Share Your Experience!</h3>
      <hr></hr>
      <p style={{ color: "white" }}>
        Share a scenario where you used your skills learnt with us in a real
        life situation
      </p>

      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Course(s) you studied with us:</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={courseValue}
          onChange={(e) => setCourseValue(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Story</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Container className="h-90">
        <Row className="">
          <Col className="d-flex align-items-left" sm={4}>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              whileHover={{
                color: "#fff",
                boxShadow: "0px 0px 8px #9afd79",
                scale: 1.1,
              }}
              className="postStoryBtn text-fanzWhite"
            >
              Post Story
            </motion.button>
          </Col>
          <Col className="d-flex align-items-left" sm={8}>
            {error && (
              <div className="error">
                <i class="fa-solid fa-circle-xmark"></i> Please fill in all the
                fields
              </div>
            )}
            {showPopup && (
              <div className="success-msg">
                <i class="fa-solid fa-check"></i> Post submitted
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default PostForm;
