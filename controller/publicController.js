// publicController.js

// import model
model = require("../model");

// Handle index actions
exports.index = function(req,res) {
    // render view
    res.render('index');
};