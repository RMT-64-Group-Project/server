const express = require('express')
const MainController = require('../controllers/main')

const mainRouter = express.Router()

mainRouter.get('/', MainController.hello)

module.exports = mainRouter