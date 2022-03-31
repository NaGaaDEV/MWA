const express = require("express");
const gamesController = require("../controller/games.controller");

const router = express.Router();

router.route("/games")
    .get(gamesController.getAll);

module.exports = router;