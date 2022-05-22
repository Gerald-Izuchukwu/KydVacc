const mongoose = require('mongoose');

const VaccineSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model('Vaccine', VaccineSchema);
