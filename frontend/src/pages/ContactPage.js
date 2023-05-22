//blank react component for page
import React from "react";

//components
import ContactForm from "../components/Contact/ContactForm.js";

const ContactPage = () => {
  return (
    <div className="page">
      <h2 style={{ color: "white" }}>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
