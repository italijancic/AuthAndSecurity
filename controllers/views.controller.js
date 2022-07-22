
exports.getHome = (req, res) => {

	try {
		res.render('home')
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}

exports.getLogin = (req, res) => {

	try {
		res.render('login')
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}

exports.getRegister = (req, res) => {

	try {
		res.render('register')
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}

exports.getSecrets = (req, res) => {

	try {
		res.render('secrets')
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}

exports.getSubmit = (req, res) => {

	try {
		res.render('submit')
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message
		})
	}

}