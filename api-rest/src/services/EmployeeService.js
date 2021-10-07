const employeeDB = require('../../db/employees.json')
const rolesDB = require('../../db/roles.json')

class EmployeeService {
  listEmployees() {

    console.log(employeeDB)
    return employeeDB
  }

  employeeRole({ employeeId }) {
    const employee = employeeDB.find((e) => e.id === employeeId)

    const employeeRole = rolesDB.find((role) => role.id == employee.roleId)

    if (!employeeRole) {
      throw new Error('Role not found')
    }

    return employeeRole
  }

  getEmployeeById({ employeeId }) {
    const employee = employeeDB.find((e) => e.id === employeeId)

    if (!employee) {
      throw new Error('Employee not found')
    }

    return employee
  }

  createEmployee({ employee }) {
    const lastEmployee = employeeDB[employeeDB.length - 1]

    const newEmployee = {
      id: lastEmployee.id + 1,
      ...employee
    }

    employeeDB.push(newEmployee)

    return newEmployee
  }

  deleteEmployee({ employeeId }) {
    const employee = employeeDB.find((e) => e.id == employeeId)

    if (!employee) {
      throw new Error('Employee not found')
    }

    const employeeIndex = employeeDB.indexOf(employee)
    employeeDB.splice(employeeIndex, 1)
  }

  updateEmployee({ employee, employeeId }) {
    const foundedEmployee = employeeDB.find((e) => e.id == employeeId)

    if (!foundedEmployee) {
      throw new Error('Employee not found')
    }

    const employeeIndex = employeeDB.indexOf(employee)

    const updatedEmployee = {
      ...employee,
      id: employeeId
    }

    employeeDB[employeeIndex] = updatedEmployee
    return updatedEmployee
  }
}

module.exports = EmployeeService
