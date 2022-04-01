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
    if(req.body && req.body.title != undefined && req.body.price != undefined && req.body.minPlayers != undefined && req.body.maxPlayers != undefined && req.body.minAge != undefined) {
        let statusCode;
        let message = "";
        if((req.body.minPlayers < 1 || req.body.minPlayers > 11) || (req.body.maxPlayers < 1 || req.body.maxPlayers > 11)) {
            message = "The minimum number of players are between 1 and 11, ";
            statusCode = 400;
        } 
        if(req.body.minAge < 6 || req.body.minAge > 99) {
            message += "The age range can only be between 6-99";
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
                statusCode = err ? 500 : 201;
                res.status(statusCode).send(response);
            })
        } else {
            res.status(statusCode).send(message);
        }
    } else {
        res.status(400).send("Bad request");
    }
}

module.exports.deleteOne = function(req, res) {
    const gameId = req.params.gameId;
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