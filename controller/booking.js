const path = require('path');

const Users = require('../models/users');

exports.display = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','index.html'));
}

exports.users = (req,res,next) => {
    const userData = req.body;
    console.log(userData);
    Users.create({
        username: userData.username,
        phone: userData.phone,
        email: userData.email,
    })
    .then(result => {
        console.log("created: ",result);
    })
    .catch(err => console.log("There is error: ",err));
}