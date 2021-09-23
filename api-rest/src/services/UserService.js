const employeeDB = require('../../db/employees.json')
const rolesDB = require('../../db/roles.json')

class UserService {
  listUsers() {
    return employeeDB
  }

  userRole({ userId }) {
    const user = employeeDB.find((employee) => employee.id === userId)

    const userRole = rolesDB.find((role) => role.id == user.roleId)

    if (!userRole) {
      throw new Error('Role not found')
    }

    return userRole
  }

  getUserById({ userId }) {
    const user = employeeDB.find((employee) => employee.id === userId)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  createUser({ user }) {
    const lastUser = employeeDB[employeeDB.length - 1]

    const newUser = {
      id: lastUser.id + 1,
      ...user
    }

    employeeDB.push(newUser)

    return newUser
  }

  deleteUser({ userId }) {
    const user = employeeDB.find((employee) => employee.id == userId)

    if (!user) {
      throw new Error('User not found')
    }

    const userIndex = employeeDB.indexOf(user)
    employeeDB.splice(userIndex, 1)
  }

  updateUser({ user, userId }) {
    const employee = employeeDB.find((employee) => employee.id == userId)

    if (!employee) {
      throw new Error('User not found')
    }

    const employeeIndex = employeeDB.indexOf(employee)

    const updatedEmployee = {
      ...user,
      id: userId
    }

    employeeDB[employeeIndex] = updatedEmployee
    return updatedEmployee
  }
}

module.exports = UserService
