const express = require("express");
const gamesController = require("../controller/games.controller");

const router = express.Router();

router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne);

router.route("/games/:gameId")
    .get(gamesController.getOne)
    .delete(gamesController.deleteOne);
    
module.exports = router;