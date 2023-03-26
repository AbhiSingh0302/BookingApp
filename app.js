const express = require('express');

const bodyParser = require('body-parser');

const bookingRouter = require('./routes/booking');

const app = express();

app.use(bodyParser.json())

app.use(bookingRouter);

app.listen(3000);

