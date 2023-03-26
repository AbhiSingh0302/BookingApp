const express = require('express');

const bodyParser = require('body-parser');

const bookingRouter = require('./routes/booking');

const userRouter = require('./routes/user');

const usersRouter = require('./routes/users');

const sequelize = require('./utils/database');

const app = express();

app.use(bodyParser.json());
app.use(usersRouter);
app.use(userRouter);
app.use(bookingRouter);

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})


