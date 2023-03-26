const booking = require('../controller/booking');

const express = require('express');

const router = express.Router();

router.post('/',booking.users);

router.get('/',booking.display);


module.exports = router;