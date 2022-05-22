const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name'],
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'please enter a valid email'],
	},
	role: {
		type: String,
		enum: ['user', 'health officer'],
		required: true,
		default: 'user',
	},
	password: {
		type: String,
		required: true,
		minlength: [
			6,
			'The password should not contain less than 6 characters',
		],
	},
});

module.exports = mongoose.model('User', UserSchema);
