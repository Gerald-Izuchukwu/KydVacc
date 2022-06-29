const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 7800;
const colors = require('colors');
const auth = require('./routes/auth');

// connect to database
connectDB();

app.use('/', auth);
app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`.yellow.bold);
});
