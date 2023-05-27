//blank react component for page
import React from "react";

//components
import PageHeading from "../components/PageHeading";

const MedicPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Event Medics" />
      </div>
    </div>
  );
};

export default MedicPage;
