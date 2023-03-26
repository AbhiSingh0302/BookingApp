const express = require('express');

const bookingRouter = require('./routes/booking');

const app = express();

app.use(bookingRouter);

app.listen(3000);

