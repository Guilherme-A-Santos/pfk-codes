const { Router } = require('express')

const UserController = require('./controllers/UserController')

const routes = new Router()

app.get('/users', UserController.listUser)

app.get('/users/:id', UserController.getUserById)

app.get('/users/:id/role', UserController.getUserRole)

app.post('/users', UserController.insertUser)

app.delete('/users/:id', UserController.deleteUser)

app.put('/users/:id', UserController.updateUser)

module.exports = routes;
