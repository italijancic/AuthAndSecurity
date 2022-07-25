const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')
const { verifyToken } = require('../middlewares/verifyJWT.middleware')


router.get('/', verifyToken, user.getUsers)
router.post('/register', user.register)

module.exports = router