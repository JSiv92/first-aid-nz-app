import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <>
      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74366.57262985913!2d174.67019855406286!3d-36.84231125159735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d384d33a288fb%3A0xedacc3bc254a694e!2sFirst%20Aid%20(NZ)!5e0!3m2!1sen!2snz!4v1686547273310!5m2!1sen!2snz"
          allowfullscreen
          title="fanz location"
        ></iframe>
      </div>
    </>
  );
};

export default ContactInfo;
