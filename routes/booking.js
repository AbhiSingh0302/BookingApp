const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/',booking.display);