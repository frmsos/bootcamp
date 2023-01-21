const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String,
        minlength: [10, "The setup must be at least 10 characters long!!!"]
    },
	punchline: {
        type: String,
        minlength: [3, "The setup must be at least 10 characters long!!!"]
    }
}); 

const Joke = mongoose.model("Jokes", JokeSchema);

module.exports = Joke;