// Filename : index.js 🔥
// import express
const express = require("express");
const multer = require('multer');
// import body parser
const bodyParser =  require("body-parser");
//import ejs
const ejs = require('ejs');
// Import mongoose
const mongoose = require("mongoose");
//import path
const path = require('path');
// require node-fetch
const fetch = require('node-fetch');
// require routes default
const routes = require("./routes/routes");
// require routes api default
const api = require("./routes/api");
// require variable constant
const constant = require("./constant");

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  // Init Upload image
  const upload = multer({
    storage: storage,
    limits:{fileSize: 2000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('image');
  
  // Check File Type
  function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }

/* / The Storage Engine */

// Initialize app
const app = express();
app.use(bodyParser.json()); // set routes public
app.use("/",routes);  // set routes public
app.use(express.static('./public'));  // set static folder
app.use("/",routes);  // set routes public
app.use("/api",api); // set routes api
app.set('view engine', 'ejs');
/* handle upload */
app.post('/upload', (req, res) => {
upload(req, res, (err) => {
    if(err){
    res.json({message:err});
    } else {
    if(req.file == undefined){
        res.json({message:"no image"});
    } else {
        res.json({message:"success",file : `uploads/${req.file.filename}`});
    }
    }
});
});

// connect to mongoose set connection variable/
mongoose.connect('mongodb://localhost/'+constant.dbName,{useNewUrlParser:true});
const db = mongoose.connection;
//added check for db connection
if(!db)
{
    console.log("error connecting to");
}
else
{
    console.log("Db connected successfully");
}

  /* serve server */
  // launch app to specified port
app.listen(constant.port,function(){
    console.log("🏃‍♀️ Running app on port "+constant.port);
})