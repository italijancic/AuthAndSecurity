const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')


router.get('/', /*verify token*/ user.getUsers)
router.post('/register', user.register)

module.exports = router