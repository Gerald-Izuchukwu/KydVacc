const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter the name of your child/ward'],
	},

	age: {
		type: Number,
		required: [true],
	},

	sex: {
		type: String,
	},
});

module.exports = mongoose.model('Child', ChildSchema);
