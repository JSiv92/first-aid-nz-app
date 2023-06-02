//blank react component for page
import React from "react";

//components
import PageHeading from "../components/PageHeading";
import AllCourses from "../components/Courses/AllCourses";
import CourseForm from "../components/Courses/CourseForm.js";

const CoursesPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="First Aid Courses" />
        <AllCourses />
        <CourseForm />
      </div>
    </div>
  );
};

export default CoursesPage;
