const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { verifyToken } = require('../middlewares/verifyJWT.middleware')
const { validateFields } = require('../middlewares/fieldsValidator.middleware')
const user = require('../controllers/user.controller')


router.get('/', verifyToken, user.getUsers)
router.post('/register', [	check('username', 'Required field').isEmail(),
							check('password', 'Required field').not().isEmpty(),
							validateFields	],
							user.register)

module.exports = router