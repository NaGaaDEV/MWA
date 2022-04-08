const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const games = mongoose.model(process.env.GAME_MODEL);

_runGeoQuery = function(req, res, limit) {
    const offset = 0;
    const lng = parseFloat(req.query.lat);
    const lat = parseFloat(req.query.lan);
    const point = {type: "Point", coordinates: [lng, lat]};
    const query="";
    games.find(query).skip(offset).limit(limit).exec(function(err, docs) {
        if(err) {
            res.send(500).json({message: err})
        } else {
            res.status(200).json(docs);
        }
    });
}


module.exports.getAll = function(req, res) {
    let limit = 5;
    if(req.query && req.query.count) {
        limit = parseInt(req.query.count) < 10 ? parseInt(req.query.count) : 10;
    }
    if(req.query && req.query.lat && req.query.lan) {
        _runGeoQuery(req, res, limit);
        return;
    }
    
    games.find().limit(limit).exec(function(err, docs) {
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
        games.findById(gameId).exec(function(err, doc) {
            if(err) {
                res.status(500).send("Database error");
            } else {
                res.status(200).json(doc)
            }
        })
    } else {
        res.status(400).send("Bad request");
    }
}

module.exports.addOne = function(req, res) {
    if(req.body && req.body.title) {
        const respond = function(err, result) {
            if(err) {
                res.status(500).json({message: err})
            } else {
                res.status(201).json(result);
            }
        }
        games.create(req.body, (err, result) => respond(err, result))
    } else {
        res.status(400).json({message: "Game title is required"})
    }
    /*
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
    */
}

module.exports.deleteOne = function(req, res) {
    const gameId = req.params.gameId;
    if(gameId) {
        games.findOneAndDelete(gameId).exec(function(err, docs) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(204).json(docs)
            }
        })
    } else {
        res.status(400).send("Bad request");
    }
}