const path = require('path');

const Users = require('../models/users');

exports.display = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','index.html'));
}

exports.user = (req,res,next) => {
    const userData = req.body;
    console.log(userData);
    Users.create({
        username: userData.username,
        phone: userData.phone,
        email: userData.email,
    })
    .then(result => {
        console.log("created");
        res.redirect('/');
    })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    });
}

exports.users = (req,res,next)=>{
    Users.findAll()
    .then(results=>{
        console.log("Success");
        res.send(results);
    })
    .catch(err=>console.log("There is error: ",err));
}

exports.userDelete = (req,res,next)=>{
    console.log(req.params);
    const id = req.params.id;
    const edit = req.query.edit;
    console.log(id,edit);
        Users.destroy({
            where:{
                id: id
            }
        })  
}