//blank react component for home page
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//stylesheet
import "./HomePage.css";

//components
import Carousel from "../components/Home/Carousel.js";

//carousel is outside page div for full span
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="book fw-light">
        Enrol in a First Aid Course Today{" "}
        <Link to="/courses">
          <motion.button
            whileHover={{
              fontSize: "20px",
              boxShadow: "0px 0px 8px #fafafa",
            }}
            className="bookNow"
          >
            → Book Now ←
          </motion.button>
        </Link>
      </div>
      <motion.h3 className="text3" animate={{ fontSize: "28px" }}>
        <strong>First Aid NZ</strong> has been specialising in a wide range of
        First Aid services for over 20 years. <br />
        <br />
        We are Auckland based, with a nationwide clientbase.
      </motion.h3>
      <Container className="container">
        <Row className="gx-5">
          <Col className="col1" md={12} lg={4}>
            <Link to="/courses" className="link">
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <motion.h3
                className="text"
                whileHover={{
                  fontSize: "27px",
                  color: "rgb(250, 250, 250)",
                  textShadow: "0px 0px 4px #9afd79",
                  originX: 0,
                }}
              >
                We plan, develop and deliver quality emergency response
                programmes.
              </motion.h3>
            </Link>
          </Col>

          <Col className="col2" md={12} lg={4}>
            <Link to="/medics" className="link">
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <motion.h3
                className="text"
                whileHover={{
                  fontSize: "27px",
                  color: "rgb(250, 250, 250)",
                  textShadow: "0px 0px 4px #9afd79",
                  originX: 0,
                }}
              >
                Our highly
                <br /> skilled Event Medics have nationwide industry experience.
              </motion.h3>
            </Link>
          </Col>

          <Col className="col3" md={12} lg={4}>
            <Link to="/products" className="link">
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block"
              ></Image>
              <motion.h3
                className="text"
                whileHover={{
                  fontSize: "27px",
                  color: "rgb(250, 250, 250)",
                  textShadow: "0px 0px 4px #9afd79",
                  originX: 0,
                }}
              >
                We offer a<br /> wide range of medical products at
                <br /> competitive prices.
              </motion.h3>
            </Link>
          </Col>
        </Row>
      </Container>

      <motion.h3
        className="text"
        whileHover={{
          color: "rgb(250, 250, 250)",
          textShadow: "0px 0px 4px #9afd79",
        }}
      >
        Become a Lifesaver. <br />
        Make a difference when nobody else is around.
      </motion.h3>
      <Container className="container">
        <Row className="">
          <Col md={12} lg={6}>
            <Link to="/screening" className="link">
              <Image
                src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
                rounded
                fluid
                responsive
                className="mx-auto d-block mt-2"
              ></Image>
              <motion.h4
                className="text"
                whileHover={{
                  fontSize: "23px",
                  color: "rgb(250, 250, 250)",
                  textShadow: "0px 0px 4px #9afd79",
                  originX: 0,
                }}
              >
                Our personnel provide medical, hearing, health checks and a
                range of drug screening options.
              </motion.h4>
            </Link>
          </Col>
          <Col md={12} lg={6}>
            <Image
              src="https://www.aedcpr.com/images/online-cpr-aed-first-aid-class.webp"
              rounded
              fluid
              responsive
              className="mx-auto d-block mt-2"
            ></Image>
            <motion.h4
              className="text"
              whileHover={{
                fontSize: "23px",
                color: "rgb(250, 250, 250)",
                textShadow: "0px 0px 4px #9afd79",
                originX: 0,
              }}
            >
              First Aid NZ actively supports community initiatives for positive
              health & wellbeing.
            </motion.h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
