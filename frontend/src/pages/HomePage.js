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
          <Row>
            <Col className="" sm={12} md={6} lg={3}>
              <p className="text">
                Our aim is to plan, develop and deliver quality pre-hospital
                response programmes
              </p>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <p className="text">
                Learn to become a Lifesaver - <br />
                Make a difference when nobody else is around
              </p>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <Image
                src={ambo}
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
            </Col>
          </Row>

          <Row>
            <Col className="" sm={12} md={6} lg={3}>
              <p className="text">
                Our ambulances and self-contained medical caravan help us
                provide First Aid cover for small groups to large crowds
              </p>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <Image
                src="https://static.wixstatic.com/media/989b98_6fda902acbe64839b297b5cb60b6b58e.jpg/v1/fill/w_838,h_629,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/989b98_6fda902acbe64839b297b5cb60b6b58e.jpg"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <p className="text">
                We carefully pick products that are of the highest quality and
                competitively priced
              </p>
            </Col>
            <Col className="" sm={12} md={6} lg={3}>
              <Image
                src={bandaid}
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
