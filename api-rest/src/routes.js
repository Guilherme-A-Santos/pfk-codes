const { Router } = require('express')

const AuthController = require('./controllers/AuthController');
const EmployeeController = require('./controllers/EmployeeController');

const authMiddleware = require('./middlewares/auth');

const routes = new Router()


routes.post('/login', AuthController.authenticate)

routes.use(authMiddleware)

routes.get('/employee', EmployeeController.listEmployee)

routes.get('/employee/:id', EmployeeController.getEmployeeById)

routes.get('/employee/:id/role', EmployeeController.getEmployeeRole)

routes.post('/employee', EmployeeController.insertEmployee)

routes.delete('/employee/:id', EmployeeController.deleteEmployee)

routes.put('/employee/:id', EmployeeController.updateEmployee)

module.exports = routes;
