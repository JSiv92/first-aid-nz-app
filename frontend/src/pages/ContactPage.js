//blank react component for page
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//components
import PageHeading from "../components/PageHeading";
import ContactForm from "../components/Contact/ContactForm.js";
import ContactInfo from "../components/Contact/ContactInfo";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Contact Us" />
        <Row className="align-items-center">
          <Col className="text-center border-solid-1px" xs={6} md={3}>
            <h5>Onsite Training</h5>
            <p>
              <a
                className="text-fanzWhite"
                href="mailto:shelley@firstaidnz.co.nz"
              >
                shelley@firstaidnz.co.nz
              </a>
            </p>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <h5>Public Courses</h5>
            <p>
              <a
                className="text-fanzWhite"
                href="mailto:helen@firstaidnz.co.nz"
              >
                helen@firstaidnz.co.nz
              </a>
            </p>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <h5>Event Medics</h5>
            <p>
              <a
                className="text-fanzWhite"
                href="mailto:shelley@firstaidnz.co.nz"
              >
                shelley@firstaidnz.co.nz
              </a>
            </p>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <h5>General Enquiries</h5>
            <p>
              <a className="text-fanzWhite" href="mailto:info@firstaidnz.co.nz">
                info@firstaidnz.co.nz
              </a>
            </p>
          </Col>
        </Row>

        <Row className="">
          <Col xs={12} md={4}>
            <ContactForm />
          </Col>
          <Col xs={12} md={8}>
            <ContactInfo />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
