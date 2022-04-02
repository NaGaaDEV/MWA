const mongoose = require("mongoose");

const courses = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

const student = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    GPA: Number,
    courses: [courses]
});

mongoose.model(process.env.STUDENT_MODEL, student, process.env.STUDENT_COLLECTION);