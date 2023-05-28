import React from "react";
import "./PageHeading.css";

const PageHeading = ({ text }) => {
  return (
    <h1 className="pageTitle display-2">
      <strong>{text}</strong>
    </h1>
  );
};

export default PageHeading;
