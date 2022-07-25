const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
	email: {type: String, required: true, uniqueCaseInsensitive: true},
	password: {type: String, required: true},
	date: {type: Date, default: Date.now()},
})


// Apply plugin to avoid email repetition on users registers
userSchema.plugin(uniqueValidator)

const User = new mongoose.model('User', userSchema)

module.exports = User