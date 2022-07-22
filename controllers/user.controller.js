const bcrypt = require('bcryptjs')

const User = require('../models/User')
const views = require('./views.controller')



exports.register = async(req, res) => {

	try {
		// Apply hash to password
		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(req.body.password, salt)

		// Create a new user
		const newUser = new User({
			email: req.body.username,
			password: hash
		})

		const savedUser = await newUser.save()

		if (savedUser === newUser) {
			// res.status(201).json({
			// 	success: true,
			// 	message: `usuario: ${savedUser.email} succesfully created`
			// })
			res.redirect('/login')
		} else {
			res.status(500).json({
				success: false,
				message: 'Error saving new user on DB'
			})
		}

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}

exports.login = async(req, res) => {

	try {
		// Parse request body
		const {username, password} = req.body

		// Look for username on DB
		const foundUser = await User.findOne({email: username})

		if (foundUser) {
			// Check password
			bcrypt.compare(password, foundUser.password).then((result) => {
				if (result) {
					views.getSecrets(req, res)
				} else {
					res.status(400).json({
						success: false,
						message: 'Password incorrect'
					})
				}
			})
		} else {
			res.status(404).json({
				success: false,
				message: 'user does not exist!'
			})
		}

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}