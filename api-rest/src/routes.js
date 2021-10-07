const { Router } = require('express')

const EmployeeController = require('./controllers/EmployeeController')

const routes = new Router()

routes.get('/employee', EmployeeController.listEmployee)

routes.get('/employee/:id', EmployeeController.getEmployeeById)

routes.get('/employee/:id/role', EmployeeController.getEmployeeRole)

routes.post('/employee', EmployeeController.insertEmployee)

routes.delete('/employee/:id', EmployeeController.deleteEmployee)

routes.put('/employee/:id', EmployeeController.updateEmployee)

module.exports = routes;
