const express = require("express");
const studentContoroller = require("../controller/student.controller");

const router = express.Router();

router.route("/students").get(studentContoroller.getAll)
router.route("/students/:studentId").get(studentContoroller.getOne)

module.exports = router;