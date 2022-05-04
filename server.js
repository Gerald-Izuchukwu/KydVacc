const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 7800;
const colors = require('colors');

// connect to database
connectDB();
app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`.yellow.bold);
});
