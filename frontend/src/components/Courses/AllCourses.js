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
import "./AllCourses.css";
//Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const AllCourses = () => {
  const [courses, setCourses] = useState(null);
  const [sortColumn, setSortColumn] = useState(""); //to track the column to sort
  const [sortOrder, setSortOrder] = useState(1); //track the sorting order for column
  const [searchQuery, setSearchQuery] = useState(""); //filter by input

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 1 ? -1 : 1); // click column for asc desc
    } else {
      setSortColumn(column);
      setSortOrder(1);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  //onclick function to actually sort the columns
  //return a new sorted array
  const sortedCourses = courses
    ? [...courses].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return -1 * sortOrder;
        }
        if (a[sortColumn] > b[sortColumn]) {
          return 1 * sortOrder;
        }
        return 0;
      })
    : [];

  //array to hold filtered courses
  const filteredResult = sortedCourses.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //useeffect hook to fetch courses from mongo
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();
      //check response is ok 200 first
      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  //map courses to table
  return (
    <>
      <div className="courseInfo">
        <h4>
          <i class="fa-solid fa-circle-info"></i>
          <strong> Pre-Course Information</strong>
        </h4>
        <hr />
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <br /> It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>
      <div className="AllCourses">
        <h4>
          <i class="fa-solid fa-graduation-cap"></i>
          <strong> Our Courses</strong>
        </h4>
        <hr />
        <div className="filterTable mb-2">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter a Course, Location or Date:"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="courses">
          <Table size="md" responsive striped bordered hover className="table">
            <thead>
              <tr class="text-white bg-fanzGreen">
                <th>
                  <div className="d-grid gap-2">
                    <Button
                      variant="outline-fanzWhite"
                      size="sm"
                      onClick={() => handleSort("courseName")}
                    >
                      Course
                      {sortColumn === "courseName" && sortOrder === 1 && " ▲"}
                      {sortColumn === "courseName" && sortOrder === -1 && " ▼"}
                    </Button>
                  </div>
                </th>
                <th>
                  <div className="d-grid gap-2">
                    <Button
                      variant="outline-fanzWhite"
                      size="sm"
                      onClick={() => handleSort("location")}
                    >
                      Location
                      {sortColumn === "location" && sortOrder === 1 && " ▲"}
                      {sortColumn === "location" && sortOrder === -1 && " ▼"}
                    </Button>
                  </div>
                </th>
                <th className="text-center">Date</th>
                <th className="text-center">Price</th>
                <th className="text-center">Book Now</th>
              </tr>
            </thead>
            <tbody>
              {filteredResult.map((course) => (
                <tr key={course._id}>
                  <td>{course.courseName}</td>
                  <td>{course.location}</td>
                  <td>{course.date}</td>
                  <td>${course.price}</td>
                  <td>
                    <div className="d-grid gap-2">
                      <Button size="sm" variant="success">
                        Enrol
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="courseInfo">
        <h4>
          <i class="fa-solid fa-location-dot"></i>
          <strong> Course Locations</strong>
        </h4>
        <hr />
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <br /> It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>
    </>
  );
};

export default AllCourses;
