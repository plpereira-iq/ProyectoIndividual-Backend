const UserController = require('../controller/user.controller');

module.exports = (app) => {
    app.get('/api/users', UserController.getAllUsers);
    app.post('/api/users', UserController.addUser);
    app.post('/api/users/login', UserController.login);
}