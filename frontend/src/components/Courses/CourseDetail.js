/*
-> Individual Course Card
*/

import React from "react";
import Button from "react-bootstrap/Button";

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details">
      <h5>{course.courseName}</h5>
      <p>
        <strong>Price: </strong>$ {course.price}
      </p>
      <p>Date: {course.date}</p>
      <p>Location: {course.location}</p>
      <br />
      <Button variant="success">Book</Button>
    </div>
  );
};

export default CourseDetails;
