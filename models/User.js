const mongoose = require('mongoose')

// const encrypt = require('mongoose-encryption')

const userSchema = new mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	date: {type: Date, default: Date.now()},
})

// Add encrypt plugin to passwords
// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']})

const User = new mongoose.model('User', userSchema)

module.exports = User