const booking = require('../controller/booking');

const express = require('express');

const router = express.Router();

router.post('/user',booking.users);

module.exports = router;