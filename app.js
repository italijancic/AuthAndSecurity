require('dotenv').config()

const ejs = require('ejs')
const routes = require('./routes/index.routes')
const express = require('express')
const { dbConnect } = require('./configs/db.config')

// Init express instance and config it
app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)

// Init DB
dbConnect()


app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`)
})