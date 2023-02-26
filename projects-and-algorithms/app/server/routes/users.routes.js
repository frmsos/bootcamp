const UserController = require('../controllers/users.controllers')


module.exports = (app) =>{
    app.post('/api/pizzapp/register', UserController.registerUser)
    app.post('/api/pizzapp/login', UserController.loginUser) 
    app.get('/api/pizzapp/logout', UserController.logOutUser) 

}