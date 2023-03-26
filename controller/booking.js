const path = require('path');

exports.display = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','view','index.html'));
}