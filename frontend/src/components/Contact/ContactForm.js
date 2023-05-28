import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div className="page">
      <Form className="">
        <Form.Group className="mb-3" controlId="nameGroup">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="email" placeholder="" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailGroup">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subjectGroup">
          <Form.Label>Subject</Form.Label>
          <Form.Select>
            <option>General Enquiries</option>
            <option value="First Aid Courses">First Aid Courses</option>
            <option value="Event Medics">Event First Aid</option>
            <option value="Screening">Health & Drug Screening</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="messageGroup">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="fanzGreen" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
