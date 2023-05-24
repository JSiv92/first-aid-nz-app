/*
->This code exports several modules to use in routing to handle 
  HTTP requests and CRUD operations for first aid courses. 

JS 24/may/2023
*/

const mongoose = require("mongoose");
const Course = require("../models/CourseModel");

//GET all courses sorted by creation date in descending order
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });

  //send all products as json to client
  res.status(200).json(courses);
};

//GET single course
const getCourse = async (req, res) => {
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "id is not valid" });
  }

  const course = await Course.findById(id);

  //if no matching course:
  if (!course) {
    return res.status(404).json({ error: "no course found matching that id" });
  }

  res.status(200).json(course);
};

//CREATE new course
const createCourse = async (req, res) => {
  //get attributes from request body:
  const { courseName, price, date, location, spotsLeft } = req.body;

  //add 'doc' to db:
  try {
    const course = await Course.create({
      courseName,
      price,
      date,
      location,
      spotsLeft,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE course
const updateCourse = async (req, res) => {
  //get id of course to update
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      //get all properties to update from the body with '...':
      ...req.body,
    },
    { new: true } //respond with updated doc
  );

  //if id didnt match anything in db
  if (!course) {
    return res.status(404).json({ error: "Course to update is not found" });
  }

  res.status(200).json(course);
};

//DELETE course by id
const deleteCourse = async (req, res) => {
  //get id from body:
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  //delete object (note id is called '_id' in mongodb)
  const course = await Course.findOneAndDelete({ _id: id });

  //if id didnt match anything in db
  if (!course) {
    return res.status(404).json({ error: "Course to delete is not found" });
  }

  //if successfully deleted:
  res.status(200).json(course);
};

//export modules to use in routing
module.exports = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
};
