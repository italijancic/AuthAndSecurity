const jwt = require('jsonwebtoken')

exports.generateJWT = (userID) => {

	return new Promise((resolve, reject) => {

		const payload = {
			userID: userID
		}

		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1800s' }, (err, token) => {

			if (err) {
				console.log(err)
				reject(err)
			} else {
				resolve(token)
			}

		})
	})

}