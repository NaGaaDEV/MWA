const mongoose = require("mongoose");
const student = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function(req, res) {
    const studentId = req.params.studentId;
    if(studentId) {
        student.findById(studentId).select("courses").exec(function(err, docs) {
            if(err) {
                res.status(500).json({error: err})
            } else {
                res.status(200).json(docs.courses);
            }
        });     
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED})
    }
}

module.exports.getOne = function(req, res) {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    if(studentId && courseId) {
        student.findById(studentId).select("courses").exec(function(err, doc) {
            if(err) {
                res.status(500).json({error: err})
            } else {
                res.status(200).json(doc.courses.id(courseId));
            }
        });
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED + " & " + process.env.MSG_COURSE_ID_REQUIRED});
    }
}

module.exports.addOne = function(req, res) {
    const studnetId = req.params.studentId;
    if(studentId) {
        //TODO
        console.log("todo course add");
        res.status(201).send("todo course add");
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED});
    }
}

module.exports.deleteOne = function(req, res) {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    if(studentId && courseId) {
        //TODO
        console.log("todo course delete");
        res.status(201).send("todo course delete");
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED});
    }
}