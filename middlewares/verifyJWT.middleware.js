const jwt = require('jsonwebtoken')


exports.verifyToken = (req, res, next) => {

	const token =  req.header('auth-token')

	// Check if token exist on request
	if (!token) {
		return res.status(401).json({
			success: false,
			message: 'There is no be token in reqest'
		})
	}

	// Authenticate token
	try {

		const { userID } = jwt.verify(token, process.env.JWT_SECRET)
		req.userID = userID
		next()

	} catch (error) {

		res.status(401).json({
			success: false,
			message: error.message
		})
	}

}