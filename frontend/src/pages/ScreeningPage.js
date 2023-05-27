//blank react component for page
import React from "react";

//components
import PageHeading from "../components/PageHeading";

const ScreeningPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Health Screening" />
      </div>
    </div>
  );
};

export default ScreeningPage;
