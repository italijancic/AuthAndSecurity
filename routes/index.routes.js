const express = require('express')
const router = express.Router()


router.use('/', require('./views.routes'))
router.use('/api/users/login', require('./auth.routes'))
router.use('/api/users', require('./users.routes'))


module.exports = router