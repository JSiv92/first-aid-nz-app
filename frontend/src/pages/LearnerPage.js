import React from "react";

//components
import PageHeading from "../components/PageHeading";
import Quiz from "../components/Quiz/Quiz.js";
import PostForm from "../components/Posts/PostForm";
import AllUserPosts from "../components/Posts/AllUserPosts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Want to learn First Aid?" />
        <Container className="w-100">
          <Row className="justify-content-center">
            <Col sm={12} md={6} lg={6} className="mb-4">
              <Quiz />
            </Col>
            <Col sm={12} md={6} lg={6} className="mb-4">
              <PostForm />
            </Col>
          </Row>

          <AllUserPosts />
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
