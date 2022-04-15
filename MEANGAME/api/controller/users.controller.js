const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const users = mongoose.model(process.env.USER_MODEL);

// module.exports.getAll = function(req, res) {
//     let limit = 5;
//     if(req.query && req.query.count) {
//         limit = parseInt(req.query.count) < 10 ? parseInt(req.query.count) : 10;
//     }
    
//     users.find().limit(limit).exec(function(err, docs) {
//         if(err) {
//             res.status(500).send("Database error");
//         } else {
//             res.status(200).json(docs);
//         }
        
//     });
// }

// module.exports.getOne = function(req, res) {
//     const gameId = req.params.gameId;
//     if(gameId) {
//         games.findById(gameId).exec(function(err, doc) {
//             if(err) {
//                 res.status(500).send("Database error");
//             } else {
//                 res.status(200).json(doc)
//             }
//         })
//     } else {
//         res.status(400).send("Bad request");
//     }
// }

module.exports.addOne = function(req, res) {
    if(req.body && req.body.username && req.body.password) {
        users.create(req.body).then((resolve) => res.status(201).json(resolve)).catch((reject) => res.status(500).json({message: reject}));
    } else {
        res.status(400).json({message: "Username and password is required"})
    }
}

// module.exports.deleteOne = function(req, res) {
//     const gameId = req.params.gameId;
//     if(gameId) {
//         games.findOneAndDelete(gameId).exec(function(err, docs) {
//             if(err) {
//                 res.status(500).send(err);
//             } else {
//                 res.status(204).json(docs)
//             }
//         })
//     } else {
//         res.status(400).send("Bad request");
//     }
// }

// module.exports.searchByGeo = function (req, res) {
//   const lng = parseFloat(req.query.lng);
//   const lat = parseFloat(req.query.lat); //Geo JSON Point
//   const point = { type: "Point", coordinates: { lng, lat } };
//   games.aggregate(
//     [
//       {
//         $geoNear: {
//           near: point,
//           spherical: true,
//           distanceField: "distance",
//           maxDistance: parseFloat(process.env.GEO_SEARCH_MAX_DIST, 10),
//           minDistance: parseFloat(process.env.GEO_SEARCH_MIN_DIST, 10),
//         },
//       },
//       {
//         $limit: parseFloat(5, 10),
//       },
//     ],
//     function (err, games) {
//       if (err) {
//         console.log("Geo error ", err);
//         res.status(500).json(err);
//       } else {
//         console.log("Geo results", games);
//         res.status(200).json(games);
//       }
//     }
//   );
// };