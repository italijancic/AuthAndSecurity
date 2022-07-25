const bcrypt = require('bcryptjs')
const User = require('../models/User')


// User creation
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
			res.status(201).json({
				success: true,
				message: savedUser
			})
			// res.redirect('/login')
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

exports.getUsers = async(req, res) => {

	// console.log(req.userID)

	try {

		const foundUsers = await User.find({})

		if (foundUsers.length != 0) {
			res.status(200).json({
				success: true,
				users: foundUsers
			})
		} else {
			res.status(500).json({
				success: false,
				message: 'Not users registered yet'
			})

		}

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}