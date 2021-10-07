const EmployeeService = require('../services/EmployeeService')

class EmployeeController {
  constructor() {
    this.EmployeeService = new EmployeeService();
  }

  listEmployee(req, res) {
    try {
      const employees = this.EmployeeService.listEmployees()
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

      const employeeRole = this.EmployeeService.employeeRole({ employeeId })

      return res.json(employeeRole).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  getEmployeeById(req, res) {
    try {
      const employeeId = req.params.id

      const employee = this.EmployeeService.getEmployeeById({ employeeId })

      return res.json(employee).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  insertEmployee(req, res) {
    try {
      const employee = req.body

      const newEmployee = this.EmployeeService.createEmployee({ employee })

      return res.json(newEmployee).status(201)
    } catch (error) {
      return res.json({ error, message: error.message }).status(400)
    }
  }

  deleteEmployee(req, res) {
    try {
      const employeeId = req.params.id

      this.EmployeeService.deleteEmployee({ employeeId })

      return res.json().status(204)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  updateEmployee(req, res) {
    try {
      const employeeId = req.params.id
      const employee = req.body

      const updatedEmployee = this.EmployeeService.updateEmployee({ employeeId, employee })

      return res.json(updatedEmployee).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }
}

module.exports = new EmployeeController();
