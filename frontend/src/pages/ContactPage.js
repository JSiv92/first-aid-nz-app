//blank react component for page
import React, { Suspense } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

//components
import PageHeading from "../components/PageHeading";
import ContactForm from "../components/Contact/ContactForm.js";
const LazyContactInfo = React.lazy(() =>
  import("../components/Contact/ContactInfo")
);

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
            <Suspense
              fallback={
                <Spinner
                  animation="border"
                  role="status"
                  variant="fanzLightGreen"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              }
            >
              <LazyContactInfo />
            </Suspense>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
