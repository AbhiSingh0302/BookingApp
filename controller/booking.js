const path = require('path');

exports.display = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','index.html'));
}