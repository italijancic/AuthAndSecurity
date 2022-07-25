const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/fieldsValidator.middleware')
const auth = require('../controllers/auth.controller')


router.post('/', [	check('username', 'Required field').isEmail(),
					check('password', 'Required field').not().isEmpty(),
					validateFields	],
					auth.login)


module.exports = router