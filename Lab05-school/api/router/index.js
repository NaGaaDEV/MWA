const express = require("express");
const studentContoroller = require("../controller/student.controller");
const courseController = require("../controller/course.controller");

const router = express.Router();

router.route("/students").get(studentContoroller.getAll).post(studentContoroller.addOne);
router.route("/students/:studentId").get(studentContoroller.getOne).delete(studentContoroller.deleteOne);
router.route("/students/:studentId/courses").get(courseController.getAll).post(courseController.addOne);
router.route("/students/:studentId/courses/:courseId").get(courseController.getOne).delete(courseController.deleteOne);

module.exports = router;