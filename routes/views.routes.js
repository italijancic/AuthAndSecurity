const express = require('express')
const router = express.Router()
const views = require('../controllers/views.controller')


router.get('/', views.getHome)
router.get('/login', views.getLogin)
router.get('/register', views.getRegister)
router.get('/submit', views.getSubmit)


module.exports = router