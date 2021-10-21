const setSentry = require('../config/sentry')

const { Sentry, Transaction } = setSentry()

const EmployeeService = require('../services/EmployeeService')

const employeeService = new EmployeeService()

class EmployeeController {
  listEmployee(req, res) {
    try {
      const employees = employeeService.listEmployees()
      return res.json(employees).status(200)
    } catch (error) {
      debugger
      Sentry.captureException(error);

      return res.json({ error, message: "No employees found" }).status(404)
    } finally {
      Transaction.finish();
    }
  }

  getEmployeeRole(req, res) {
    try {
      const employeeId = req.params.id

      const employeeRole = employeeService.employeeRole({ employeeId })

      return res.json(employeeRole).status(200)
    } catch (error) {
      Sentry.captureException(error);

      return res.json({ error, message: error.message }).status(404)
    } finally {
      Transaction.finish();
    }
  }

  getEmployeeById(req, res) {
    try {
      const employeeId = req.params.id

      const employee = employeeService.getEmployeeById({ employeeId })

      return res.json(employee).status(200)
    } catch (error) {
      Sentry.captureException(error);

      return res.status(404).json({ error, message: error.message })
    } finally {
      Transaction.finish();
    }
  }

  insertEmployee(req, res) {
    try {
      const employee = req.body

      const newEmployee = employeeService.createEmployee({ employee })

      return res.json(newEmployee).status(201)
    } catch (error) {
      Sentry.captureException(error);

      return res.json({ error, message: error.message }).status(400)
    } finally {
      Transaction.finish();
    }
  }

  deleteEmployee(req, res) {
    try {
      const employeeId = req.params.id

      employeeService.deleteEmployee({ employeeId })

      return res.json().status(204)
    } catch (error) {
      Sentry.captureException(error);

      return res.json({ error, message: error.message }).status(404)
    } finally {
      Transaction.finish();
    }
  }

  updateEmployee(req, res) {
    try {
      const employeeId = req.params.id
      const employee = req.body

      const updatedEmployee = employeeService.updateEmployee({ employeeId, employee })

      return res.json(updatedEmployee).status(200)
    } catch (error) {
      Sentry.captureException(error);

      return res.json({ error, message: error.message }).status(404)
    } finally {
      Transaction.finish();
    }
  }
}

module.exports = new EmployeeController();
