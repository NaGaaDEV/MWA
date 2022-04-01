const { ObjectId } = require("mongodb");
const dbconnection = require("../data/dbconnection");
const games = require("../data/games.json");
require("../data/dbconnection");

const gameCollection = () => dbconnection.get().collection("games");

module.exports.getAll = function(req, res) {
    let limit = 3;
    if(req.query && req.query.limit) {
        limit = parseInt(req.query.limit) < 10 ? parseInt(req.query.limit) : 10;
    }
        
    gameCollection().find().limit(limit).toArray(function(err, docs) {
        if(err) {
            res.status(500).send("Database error");
        } else {
            res.status(200).json(docs);
        }
        
    });
}

module.exports.getOne = function(req, res) {
    const gameId = req.params.gameId;
    if(gameId) {
        gameCollection().findOne({_id: ObjectId(gameId)}, function(err, docs) {
            if(err) {
                res.status(500).send("Database error");
            } else {
                res.status(200).json(docs)
            }
        })
    } else {
        res.status(400).send("Bad request");
    }
}

module.exports.addOne = function(req, res) {
    if(req.body && req.body.title && req.body.price && req.body.minPlayers && req.body.minAge) {
        let statusCode;
        let message = "";
        if((1>req.body.minPlayers || req.body.minPlayers > 11) && (1>req.body.maxPlayers || req.body.maxPlayers > 11)) {
            message = "The minimum number of players are between 1 and 11.";
            statusCode = 400;
        } 
        if(req.body.minAge) {
            message = "The age range can only be between 6-99";
            statusCode = 400;
        }
        if(statusCode == undefined) {
            let newGame = {
                title: req.body.title,
                price: req.body.price,
                minPlayers: req.body.minPlayers,
                maxPlayers: req.body.maxPlayers,
                minAge: req.body.minAge
            };
            gameCollection().insertOne(newGame, function(err, response) {
                if(err) {
                    statusCode = 500;
                    message = response; 
                } else {
                    statusCode = 201;
                    message = response;
                }
            })
        }
        req.status(statusCode).send(message);
    } else {
        req.status(400).send("Bad request");
    }
}

module.exports.deleteOne = function(req, res) {
    if(gameId) {
        gameCollection().deleteOne({_id: ObjectId(gameId)}, function(err, docs) {
            if(err) {
                res.status(500).send("Database error");
            } else {
                res.status(200).json(docs)
            }
        })
    } else {
        res.status(400).send("Bad request");
    }
}