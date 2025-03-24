const userService = require('../controller/userController');
const express = require('express');

const router = express.Router();

router.post('/register', userService.register);

module.exports = router;