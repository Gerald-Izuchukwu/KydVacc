const express = require('express');
const { signUpUser } = require('../controllers/auth');
const router = express.Router();

router.post('/signUp', signUpUser);

module.exports = router;
