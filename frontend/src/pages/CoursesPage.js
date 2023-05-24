//blank react component for page
import React from "react";

//components
import Quiz from "../components/Quiz/Quiz.js";
import AllCourses from "../components/Courses/AllCourses";
import CourseForm from "../components/Courses/CourseForm.js";

const CoursesPage = () => {
  return (
    <div className="page">
      <div className="content">
        <h2 style={{ color: "white" }}>First Aid Courses</h2>
        <AllCourses />
        <CourseForm />
        <Quiz />
      </div>
    </div>
  );
};

export default CoursesPage;
