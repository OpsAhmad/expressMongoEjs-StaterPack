// filename : model.js

/* database schema
1. name
1. createdate
*/

const mongoose = require("mongoose");

// setup schema
const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

// Export default table
const Sample = module.exports = mongoose.model('sample',Schema);

module.exports.get = (callback,limit) => {
    Sample.find(callback).limit(limit);
}