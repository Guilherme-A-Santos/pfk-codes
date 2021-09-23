const express = require('express');

const employeeDB = require('./db/employees.json')
const rolesDB = require('./db/roles.json')

const app = express();

app.use(express.json())
const port = 3333;

app.get('/', (req, res) => {
  res.json(employeeDB)
})

app.get('/consultarUsuario/:id', (req, res) => {
  const chosenOne = employeeDB.filter((employee) => employee.id == req.params.id)
  res.send(chosenOne)
})

app.get('/consultarRole/:id', (req, res) => {
  const chosenRole = rolesDB.filter((role) => role.id == req.params.id)
  res.send(chosenRole)
})

app.post('/criarEmpregado', (req, res) => {
  const user = req.body

  user.id = employeeDB[employeeDB.length - 1].id + 1

  employeeDB.push(user)
  res.send(user)
})

app.delete('/deletarUsuario/:id', (req, res) => {
  const user = employeeDB.find((employee) => employee.id == req.params.id)
  const userIndex = employeeDB.indexOf(user)
  employeeDB.splice(userIndex, 1)

  res.send()
})

app.put('/atualizarEmpregado/:id', (req, res) => {

  const employee = employeeDB.find((employee) => employee.id == req.params.id)
  const employeeIndex = employeeDB.indexOf(employee)

  const updatedEmployee = {
    ...req.body,
    id: req.params.id
  }

  employeeDB[employeeIndex] = updatedEmployee

  res.send(employee)
})

app.listen(port, () => {
  console.log(`i'm executing at ${port}`)
})
