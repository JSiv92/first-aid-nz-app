//blank react component for page
import React from "react";
import Quiz from "../components/Quiz/Quiz.js";
//components

const CoursesPage = () => {
  return (
    <div className="page">
      <div className="content">
        <h2 style={{ color: "white" }}>First Aid Courses</h2>
        <Quiz />
      </div>
    </div>
  );
};

export default CoursesPage;
