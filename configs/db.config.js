const mongoose = require('mongoose')

exports.dbConnect = async() => {

	try {

		console.log('[configs/db.config.js]: ⏳ Connecting DB')
		await mongoose.connect(process.env.DB_URL)
		console.log('[configs/db.config.js]: ✅ DB Succesfully connected')

	} catch (error) {
		console.log(error)
	}

}