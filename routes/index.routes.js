const express = require('express')
const router = express.Router()


router.use('/', require('./views.routes'))
router.use('/user', require('./user.routes'))

module.exports = router