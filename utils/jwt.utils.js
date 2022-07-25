const jwt = require('jsonwebtoken')

exports.generateJWT = (userID) => {

	return new Promise((resolve, reject) => {

		const payload = {
			userID,
		}
		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
			if (err) {
				console.log(err)
				reject(err)
			} else {
				resolve(token)
			}
		})
	})

}