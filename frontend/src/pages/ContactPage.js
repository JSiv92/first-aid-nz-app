//blank react component for page
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//components
import PageHeading from "../components/PageHeading";
import ContactForm from "../components/Contact/ContactForm.js";
import ContactInfo from "../components/Contact/ContactInfo";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Contact Us" />
        <Row>
          <Col xs={12} md={6}>
            <ContactInfo />
          </Col>
          <Col xs={12} md={6}>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
