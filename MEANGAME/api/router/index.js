const express = require("express");
const gamesController = require("../controller/games.controller");
const publisherController = require("../controller/publisher.controller");
const reviewsController = require("../controller/reviews.controller");

const router = express.Router();

router.route("/games/search")
    .get(gamesController.searchByGeo)
    
router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne);

router.route("/games/:gameId")
    .get(gamesController.getOne)
    .delete(gamesController.deleteOne);


router.route("/games/:gameId/publisher")
    .get(publisherController.getAll)
    .post(publisherController.addOne)
    .delete(publisherController.deleteOne);
    
router.route("/games/:gameId/reviews")
    .get(reviewsController.getAll)
    .post(reviewsController.addOne);

router.route("/games/:gameId/reviews/:reviewId")
    .get(reviewsController.getOne)
    .delete(reviewsController.deleteOne);

module.exports = router;