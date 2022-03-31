const school = require("../data/school.json");

module.exports.getAll = function(req, res) {
    res.status(200).send(school);
}

module.exports.getOne = function(req, res) {
    res.status(200).send(school[req.params.studentId])
}