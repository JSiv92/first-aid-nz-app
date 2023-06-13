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
import { useEffect, useState, useContext } from "react";
import React from "react";
import "./AllCourses.css";
import { Context } from "../../context/CartContext";
//Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import CourseList from "./CourseList";

const AllCourses = () => {
  const [courses, setCourses] = useState(null);
  const [sortColumn, setSortColumn] = useState(""); //to track the column to sort
  const [sortOrder, setSortOrder] = useState(1); //track the sorting order for column
  const [searchQuery, setSearchQuery] = useState(""); //filter by input
  const [currentPage, setCurrentPage] = useState(1); //pagination
  const coursesPerPage = 10; // Number of courses to display per page
  const { dispatch } = useContext(Context); //add to cart
  //course locations array
  const locations = [
    {
      location: "West Auckland",
      venue: "Te Atatu Peninsula Community Centre",
      address: "595 Te Atatu Road, Te Atatu Peninsula",
      parking: "Parking Available",
    },
    {
      location: "North Auckland",
      venue: "Milford Cruising Club",
      address: "24 Craig Road, Milford",
      parking: "Street Parking Available",
    },
    {
      location: "East Auckland",
      venue: "Pakuranga Tennis Club",
      address: "101 Pigeon Mountain Road, Pakuranga",
      parking: "Gill Road - No parking at Tennis club on Wednesdays",
    },
    {
      location: "South Auckland",
      venue: "Electrical Industry Training Building",
      address: "501F Mt Wellington Highway, Mt Wellington",
      parking: "Parking Available",
    },
    {
      location: "Central Auckland",
      venue: "Epsom Community Centre",
      address: "202 Gillies Ave, Epsom",
      parking: "Parking Available",
    },
    {
      location: "Tauranga",
      venue: "Tauranga Volunteer Coastguard (Gresham Room)",
      address: "72 Keith Allen Drive, Sulphur Point",
      parking: "Parking Available",
    },
  ];

  //sortable columns
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 1 ? -1 : 1); // click column for asc desc
    } else {
      setSortColumn(column);
      setSortOrder(1);
    }
  };

  //onclick function to actually sort the columns
  //returns a new sorted array to the table
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

  //filter/search bar
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  //array to hold filtered courses
  const filteredResult = sortedCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //pagination

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //useeffect hook to fetch courses from mongo products table
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();
      //check response is ok 200 first
      if (response.ok) {
        //only filter products with type courses
        const courseData = json.filter((item) => item.type === "course");
        setCourses(courseData);
      }
    };

    fetchCourses();
  }, []);

  //delete selected course from products table
  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await fetch(`/api/products/${courseId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted course from the courses state
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course._id !== courseId)
        );
      } else {
        console.error("Failed to delete the course.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the course:", error);
    }
  };

  //map courses to table
  return (
    <>
      <div className="courseInfo">
        <h4>
          <i class="fa-solid fa-circle-info"></i>
          <strong> Course Information</strong>
        </h4>
        <hr />
        <p>
          First Aid (NZ) Ltd prides itself in the development and delivery of
          high quality First Aid education uniquely tailored to the varied needs
          of our clients. Our basic courses allow for open entry, as well as
          advanced courses for the more skilled responder.
        </p>
        <p>
          Our aim is to plan, develop and deliver quality pre-hospital response
          programmes unique to the specific needs of each group of learners. So,
          if you would like to organise your own on-site course a First Aid NZ
          Facilitator will come to you. This is a service we offer nation wide
        </p>
        <p>
          Our lower overheads mean that we strive to be competitive in the
          market place and enjoy passing the saving on to you. We offer public
          courses at five locations in Auckland.
        </p>
        <p>
          For all bookings and course-related enquiries, contact{" "}
          <strong>
            <a href="mailto:helen@firstaidnz.co.nz">helen@firstaidnz.co.nz</a>
          </strong>{" "}
          or enrol below <i class="fa-solid fa-arrow-turn-down"></i>
        </p>
      </div>
      <div className="AllCourses">
        <h4>
          <i class="fa-solid fa-graduation-cap"></i>
          <strong> Book a Course</strong>
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
          <Table size="sm" responsive striped bordered hover className="table">
            <thead>
              <tr className="text-white bg-fanzGreen">
                <th className="text-left">
                  <div className="gap-2">
                    <Button
                      variant="outline-fanzWhite"
                      size="sm"
                      onClick={() => handleSort("name")}
                    >
                      Course
                      {sortColumn === "name" && sortOrder === 1 && " ▲"}
                      {sortColumn === "name" && sortOrder === -1 && " ▼"}
                    </Button>
                  </div>
                </th>
                <th className="text-left">
                  <div className="gap-2">
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
                <th className="text-left">Date</th>
                <th className="text-center" width={"50px"}>
                  Price
                </th>
                <th className="text-center" width={"70px"}>
                  Book Now
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResult.map((course) => (
                <tr key={course._id}>
                  <td>
                    <i
                      onClick={() => handleDeleteCourse(course._id)}
                      className="fa-solid fa-xmark fa-lg text-fanzRed"
                    ></i>{" "}
                    {course.name}
                  </td>
                  <td>{course.location}</td>
                  <td>{course.date}</td>
                  <td>${course.price}</td>
                  <td>
                    <div className="d-grid gap-2">
                      <Button
                        size="sm"
                        variant="outline-fanzGreen"
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: course })
                        }
                      >
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
      <CourseList />
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
