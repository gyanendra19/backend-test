const express = require('express')
const { getUser } = require('../userController')

const route = express.Router()

route.route('getUser').get(getUser)

module.exports = route