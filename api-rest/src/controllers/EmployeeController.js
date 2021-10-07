const EmployeeService = require('../services/EmployeeService')

const employeeService = new EmployeeService()

class EmployeeController {
  listEmployee(req, res) {
    try {
      const employees = employeeService.listEmployees()
      return res.json(employees).status(200)
    } catch (error) {
      return res.json({
        error,
        message: "No employees found"
      }).status(404)
    }
  }

  getEmployeeRole(req, res) {
    try {
      const employeeId = req.params.id

      const employeeRole = employeeService.employeeRole({ employeeId })

      return res.json(employeeRole).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  getEmployeeById(req, res) {
    try {
      const employeeId = req.params.id

      const employee = employeeService.getEmployeeById({ employeeId })

      return res.json(employee).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  insertEmployee(req, res) {
    try {
      const employee = req.body

      const newEmployee = employeeService.createEmployee({ employee })

      return res.json(newEmployee).status(201)
    } catch (error) {
      return res.json({ error, message: error.message }).status(400)
    }
  }

  deleteEmployee(req, res) {
    try {
      const employeeId = req.params.id

      employeeService.deleteEmployee({ employeeId })

      return res.json().status(204)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  updateEmployee(req, res) {
    try {
      const employeeId = req.params.id
      const employee = req.body

      const updatedEmployee = employeeService.updateEmployee({ employeeId, employee })

      return res.json(updatedEmployee).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }
}

module.exports = new EmployeeController();
