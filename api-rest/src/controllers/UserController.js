const UserService = require('../services/UserService')

class UserController {
  constructor() {
    this.UserService = new UserService();
  }

  listUser(req, res) {
    try {
      const users = this.UserService.listUsers()
      return res.json(users).status(200)
    } catch (error) {
      return res.json({
        error,
        message: "No employees found"
      }).status(404)
    }
  }

  getUserRole(req, res) {
    try {
      const userId = req.params.id

      const userRole = this.UserService.userRole({ userId })

      return res.json(userRole).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  getUserById(req, res) {
    try {
      const userId = req.params.id

      const user = this.UserService.getUserById({ userId })

      return res.json(user).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  insertUser(req, res) {
    try {
      const user = req.body

      const newUser = this.UserService.createUser({ user })

      return res.json(newUser).status(201)
    } catch (error) {
      return res.json({ error, message: error.message }).status(400)
    }
  }

  deleteUser(req, res) {
    try {
      const userId = req.params.id

      this.UserService.deleteUser({ userId })

      return res.json().status(204)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }

  updateUser(req, res) {
    try {
      const userId = req.params.id
      const user = req.body

      const updatedUser = this.UserService.updateUser({ userId, user })

      return res.json(updatedUser).status(200)
    } catch (error) {
      return res.json({ error, message: error.message }).status(404)
    }
  }
}

module.exports = new UserController();
