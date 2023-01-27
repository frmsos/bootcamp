const authorController = require("../controllers/author.controllers");

module.exports = app => {
    app.get("/api/authors/get", authorController.getAuthors);
    app.get("/api/authors/get/:id", authorController.getAuthorsByID);
    app.post("/api/authors/create", authorController.createAuthor);
    app.put("/api/authors/update/:id", authorController.updateAuthor);
    app.delete("/api/authors/delete/:id", authorController.deleteAuthor);

};