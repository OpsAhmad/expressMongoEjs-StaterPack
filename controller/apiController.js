// apiController.js

// import sample model
Model = require("../model/sample");

// Handle index actions
exports.index = function(req,res) {
    res.json({
        status : "success",
        message : "Welcome to master API"
    });
};

// handle input sample
exports.insert = function(req,res)
{
    var model = new Model();
    model.name = req.body.name;
    model.save((err) => {
        if(err)
        {
            res.json({message:err,data:model});
        }else{
            res.json({
                message :    "New model created successfully",
                data : model
            })
        }
    })
}