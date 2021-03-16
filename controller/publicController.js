// publicController.js
const constant = require("../constant");

// import sample model
model = require("../model/sample");

// Handle index actions
exports.index = function(req,res) {
    /*
     render view with : app_url
    */
    res.render('index',{app_url:constant.app_url});
};