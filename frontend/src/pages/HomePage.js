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
      <Container>
        <div className="book fw-light">
          Enrol in a First Aid Course Today →
          <Button className="btn btn-sm" variant="fanzGreen">
            Book Now
          </Button>{" "}
          ←
        </div>
        <h3 className="text3">
          <strong>First Aid NZ Ltd</strong> has been specialising in a wide
          range of First Aid Services for over 20 years. <br />
          <br />
          We are Auckland based, with a nationwide clientbase.
        </h3>
      </Container>

      <Container className="container">
        <Row className="gx-5">
          <Col className="col1" md={12} lg={4}>
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block"
            ></Image>
            <h3 className="text">
              We plan, develop and deliver quality emergency response
              programmes.
            </h3>
          </Col>
          <Col className="col2" md={12} lg={4}>
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block"
            ></Image>
            <h3 className="text">
              Our highly skilled Event Medics have nationwide industry
              experience.
            </h3>
          </Col>
          <Col className="col3" md={12} lg={4}>
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block"
            ></Image>
            <h3 className="text">
              We offer a wide range of medical products at competitive prices.
            </h3>
          </Col>
        </Row>
      </Container>

      <Container className="container">
        <h3 className="text3">
          Become a Lifesaver. <br />
          Make a difference when nobody else is around.
        </h3>
        <Row className="gx-5">
          <Col md={12} lg={6}>
            {" "}
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block"
            ></Image>
            <h4 className="text1">
              Our personnel provide medical, hearing and health checks. We also
              offer a range of drug screening options.
            </h4>
          </Col>
          <Col md={12} lg={6}>
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block"
            ></Image>
            <h4 className="text1">
              First Aid NZ actively supports community initiatives for positive
              health & wellbeing.
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
