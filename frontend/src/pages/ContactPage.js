//blank react component for page
import React from "react";

//components
import PageHeading from "../components/PageHeading";
import ContactForm from "../components/Contact/ContactForm.js";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Contact Us" />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
