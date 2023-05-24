//routes for Courses

// GET /Courses -> get all Courses
// POST /Courses -> add a Course
// GET /Courses/:id -> get single Course by id
// DELETE /Courses/:id -> delete single Course by id
// PATCH /Courses/:id -> update single Course by id

const express = require("express");

//import controllers
const {
  createCourse,
  getCourse,
  getCourses,
  deleteCourse,
  updateCourse,
} = require("../controllers/CourseController");

//express router
const router = express.Router();

/*----------------------------
        Course ROUTES
------------------------------*/

//get all Courses
router.get("/Courses", getCourses);

//get single Course by id
router.get("/Courses/:id", getCourse);

//post a new Course
router.post("/Courses", createCourse);

//delete a Course by id
router.delete("/Courses/:id", deleteCourse);

//update a Course
router.patch("/Courses/:id", updateCourse);

module.exports = router;
