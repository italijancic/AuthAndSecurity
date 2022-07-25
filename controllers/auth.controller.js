const User = require('../models/User')
const views = require('./views.controller')
const bcrypt = require('bcryptjs')
const jwt = require('../utils/jwt.utils')

// Login
exports.login = async(req, res) => {

	try {

		// Parse request body
		const {username, password} = req.body

		// Look for username on DB
		const foundUser = await User.findOne({email: username})

		if (!foundUser) {
			return res.status(404).json({
				success: false,
				message: 'user does not exist!'
			})
		}

		// Check password
		bcrypt.compare(password, foundUser.password).then((result) => {
			if (!result) {
				return res.status(400).json({
					success: false,
					message: 'Password incorrect'
				})
			}
		})

		// Generate JWT
		const token = await jwt.generateJWT(foundUser._id)

		res.status(200).json({
			success: true,
			message: 'Login OK!',
			user: foundUser,
			token: token
		})

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}