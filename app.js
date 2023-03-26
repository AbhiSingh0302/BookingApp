const express = require('express');

const bodyParser = require('body-parser');

const bookingRouter = require('./routes/booking');

const sequelize = require('./utils/database');

const app = express();

app.use(bodyParser.json())

app.use(bookingRouter);

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})


