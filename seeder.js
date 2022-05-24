const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// load environment variable
dotenv.config({ path: './config/config.env' });

// load models
const KidModel = require('./models/Kid');
const UserModel = require('./models/User');
const VaccineModel = require('./models/Vaccine');

// connect to database

mongoose.connect(process.env.MONGO_URI);

const users = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
const kids = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/kids.json`, 'utf-8')
);
const vaccines = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/vaccines.json`, 'utf-8')
);

// importing to database
const importData = async () => {
	try {
		await UserModel.create(users);
		await KidModel.create(kids);
		await VaccineModel.create(vaccines);
		console.log('Data Imported'.green.bold);
		process.exit();
	} catch (error) {
		console.error(error);
	}
};

const deleteData = async () => {
	try {
		await UserModel.deleteMany();
		await KidModel.deleteMany();
		await VaccineModel.deleteMany();
		console.log('Data deleted '.red.bold);
		process.exit();
	} catch (error) {
		console.error(error);
	}
};

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
