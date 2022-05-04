const mongoose = require('mongoose');
const colors = require('colors');
const connectionString =
	process.env.MONGO_URI || 'mongodb://localhost:27017/KydVacc';
const connectDB = async () => {
	try {
		const connect = await mongoose.connect(connectionString);
		console.log(
			`Database connected at ${connectionString}, also at ${connect.connection.host}`
				.cyan.bold
		);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};
module.exports = connectDB;
