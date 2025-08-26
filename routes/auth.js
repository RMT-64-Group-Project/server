const AuthController = require('../controllers/auth')

const authRoute = require('express').Router()

authRoute.post('/login', AuthController.login)

module.exports = authRoute