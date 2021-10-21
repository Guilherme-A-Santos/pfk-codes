const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = new class AuthController {
  authenticate(req, res) {
    const { email, password } = req.body;

    if (email === 'guilherme@pfk.com.br' && password === 'pfk1234') {
      const token = jwt.sign({ id: 1, email },  authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })

      return res.json({ token });
    }

    return res.status(401).json({ error: "User email or password is incorrect"})
  }
}
