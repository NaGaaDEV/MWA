const mongoose = require("mongoose");

const game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function(req, res) {
    const gameId = req.params.gameId;
    if(gameId) {
        game.findById(gameId).select("publisher").exec(function(err, doc) {
            if(err) {
                res.status(500).json({error: doc});
            } else {
                res.status(200).json(doc.publisher)
            }
        });
    } else {
        res.send(400).json({error: process.env.MSG_GAME_ID_REQUIRED})
    }
}

module.exports.addOne = function(req, res) {
    //TODO
}

module.exports.deleteOne = function(req, res) {
    const gameId = req.params.gameId;
    if(gameId) {

    } else {
        res.send(400).json({error: process.env.MSG_PUBLISHER_ID_REQUIRED})
    }
}