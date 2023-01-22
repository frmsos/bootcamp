const Controller = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", Controller.findAllJokes);
  app.get("/api/jokes/random", Controller.random);
  app.get("/api/jokes/:id", Controller.findOneJoke);
  app.put("/api/jokes/update/:id", Controller.updateExistingJoke);
  app.post("/api/jokes/new", Controller.createNewJoke);
  app.delete("/api/jokes/delete/:id", Controller.deleteJoke);

};