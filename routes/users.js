const booking = require('../controller/booking');

const express = require('express');

const router = express.Router();

router.post('/users/:id',booking.userDelete);

router.get('/users',booking.users);

module.exports = router;