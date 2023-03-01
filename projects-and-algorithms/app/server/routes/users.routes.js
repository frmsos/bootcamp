const UserController = require('../controllers/users.controllers')


module.exports = (app) =>{
    app.post('/api/pizzapp/register', UserController.registerUser)
    app.post('/api/pizzapp/login', UserController.loginUser)
    app.get('/api/pizzapp/logout', UserController.logOutUser)
    app.get('/api/pizzapp/users/:id', UserController.getUserbyID)
    app.post('/api/pizzapp/users/addresses/:id', UserController.addAddressbyID)
    app.put('/api/pizzapp/users/address/:id/:addrid', UserController.updateAddressbyID)
    app.put('/api/pizzapp/user/refactor/:id/', UserController.updateUserNoPass)
    app.put('/api/pizzapp/user/update/:id/', UserController.updateUserByID)   
    
    
    

}