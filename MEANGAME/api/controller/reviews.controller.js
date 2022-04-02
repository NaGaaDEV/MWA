const mongoose =require("mongoose");

const game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function(req, res) {
    const gameId = req.params.gameId;
    if(gameId) {
        game.findById(gameId).exec(function(err, doc) {
            if(err) {
                res.status(500).json({error: doc});
            } else {
                res.status(200).json(doc.reviews);
            }
        })
    } else {
        res.status(400).json({error: process.env.MSG_GAME_ID_REQUIRED});
    }
}

module.exports.getOne = function(req, res) {
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    if(gameId && reviewId) {
        game.findById(gameId).select("reviews").exec(function(err, doc) {
            if(err) {
                res.status(500).json({error: doc});
            }
            res.status(201).json(doc.reviews.id(reviewId));
        })

    } else {
        res.status(400).json({error: process.env.MSG_GAME_ID_REQUIRED + " & " + process.env.MSG_REVIEW_ID_REQUIRED});
    }
}

module.exports.addOne = function(req, res) {
    //TODO
}

module.exports.deleteOne = function(req, res) {
    const reviewId = req.params.reviewId;
    if(reviewId) {
        game.findByIdAndDelete(reviewId).exec(function(err, response) {
            if(err) {
                res.status(500).json({error: response});
            }
            res.status(201).json(response);
        })
    } else {
        res.status(400).json({error: process.env.MSG_REVIEW_ID_REQUIRED});
    }    
}