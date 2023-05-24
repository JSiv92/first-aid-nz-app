/*

-> A component that displays a list of courses. 
-> Fetches the courses data from Express using the useEffect hook
-> An empty dependency array ([]) ensures that the fetch is only executed once when the component is first mounted.
-> Once the courses data is fetched and stored in the courses state variable using the useState hook, 
   it is rendered as a list of CourseDetails components using the map() method.

-> Each CourseDetails component is passed a course object as a prop,
   and a unique key prop based on the _id property of the course object. 
   The key prop is required to efficiently render the list of components.

JS 24/may/2023

*/

//ALL COURSES COMPONENT//
import { useEffect, useState } from "react";
import React from "react";

//import other components to nest inside this component
import CourseDetail from "./CourseDetail";

const AllCourses = () => {
  const [courses, setCourses] = useState(null);

  //useeffect hook
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      //check response is ok
      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="AllCourses">
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <CourseDetail key={course._id} course={course} />
          ))}
      </div>
    </div>
  );
};

export default AllCourses;
