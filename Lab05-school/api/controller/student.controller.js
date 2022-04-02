const mongoose = require("mongoose");
const studnet = mongoose.model(process.env.STUDENT_MODEL);

module.exports.getAll = function(req, res) {
    let limit = 2;
    if(req.query && req.query.limit)
        limit = parseInt(req.query.limit) < 10 ? parseInt(req.query.limit) : limit;
    studnet.find().limit(limit).exec(function(err, docs) {
        if(err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json(docs);
        }
    });
}

module.exports.getOne = function(req, res) {
    const studentId = req.params.studentId;
    if(studentId) {
        studnet.findById(studentId).exec(function(err, doc) {
            if(err) {
                res.status(500).json({error: err})
            } else {
                res.status(200).json(doc);
            }
        });
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED})
    }
}

module.exports.addOne = function(req, res) {
    const studnetId = req.params.studentId;
    if(studentId) {
        //TODO
        console.log("todo student add");
        res.status(201).send("todo student add");
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED});
    }
}

module.exports.deleteOne = function(req, res) {
    const studentId = req.params.studentId;
    if(studentId) {
        studnet.findByIdAndDelete(studentId).exec(function(err, response) {
            if(err) {
                res.status(500).json({error: response});
            } else {
                res.status(201).send(response);
            }
        })
    } else {
        res.status(400).json({error: process.env.MSG_STUDENT_ID_REQUIRED});
    }
}