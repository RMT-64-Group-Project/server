class AuthController {
  static register(req, res) {
    res.send('Hello register!')
  }
  static login(req, res) {
    res.send("Hello login")
  }
}

module.exports = AuthController
