//blank react component for page
import React from "react";
import Quiz from "../components/Quiz/Quiz.js";
//components

const CoursesPage = () => {
  return (
    <div className="page">
      <h2 style={{ color: "white" }}>First Aid Courses</h2>
      <Quiz />
    </div>
  );
};

export default CoursesPage;
