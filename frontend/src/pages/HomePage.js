//blank react component for home page
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

//stylesheet
import "./HomePage.css";

//images
import ambo from "../assets/ambulance.png";
import bandaid from "../assets/band-aid.png";

//components
import Carousel from "../components/Home/Carousel.js";

//carousel is outside page div for full span
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="book fw-light">
        Enrol in a First Aid Course Today →{" "}
        <Button className="btn btn-sm" variant="fanzGreen">
          Book Now
        </Button>{" "}
        ←
      </div>
      <div className="page">
        <Container className="container">
          <Row className="gx-5">
            <Col className="col1" sm={12} md={12} lg={4}>
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <p className="text">
                Our aim is to plan, develop and deliver quality pre-hospital
                response programmes
              </p>
            </Col>
            <Col className="col2" sm={12} md={12} lg={4}>
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <p className="text">
                Our aim is to plan, develop and deliver quality pre-hospital
                response programmes
              </p>
            </Col>
            <Col className="col3" sm={12} md={12} lg={4}>
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <p className="text">
                Learn to become a Lifesaver - <br />
                Make a difference when nobody else is around
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
