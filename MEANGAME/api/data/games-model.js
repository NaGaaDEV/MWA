const mongoose = require("mongoose");

const publisherSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: String
});
const reviewSchema= new mongoose.Schema({ 
    name: {
        type: String,
        required: true 
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.Now
    }
});
const gamesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    price: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 11
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 11
    },
    minAge: Number,
    designers: [String],
    publisher: publisherSchema,
    reviews: [reviewSchema]
});

mongoose.model(process.env.GAME_MODEL, gamesSchema, process.env.GAME_COLLECTION);