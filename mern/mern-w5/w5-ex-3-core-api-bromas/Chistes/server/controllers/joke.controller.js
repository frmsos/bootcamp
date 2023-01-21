const Joke = require("../models/joke.model");

module.exports = {
  findAllJokes : (req, res) => {
    Joke.find()
      .then(allJokes => res.json({ jokes: allJokes }))
      .catch(err => res.json({ message: "Error in find all jokes", error: err }))
  },
  findOneJoke : (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
      .catch(err => res.json({ message: "Error in find one joke", error: err }));
  },
  createNewJoke : (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Error in creating a new joke", error: err }));
  },
  updateExistingJoke : (req, res) => {
    Joke.updateOne({ _id: req.params.id }, req.body)
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Error updating the joke", error: err }));
  },
  deleteJoke : (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Error deleting the joke", error: err }));
  }

};














