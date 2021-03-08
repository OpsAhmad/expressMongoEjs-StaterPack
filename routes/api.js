// filename : Routes.js

/* 
endn point summary :
GET "/api/master" list all master
POST "/api/master" create new contact
GET "/api/master/{id}" retrieve a single contact
PUT "/api/master/{id}" update a single contact
DELETE "/api/master/{id}" delete a single contact
*/

// initialize express router
const router = require("express").Router();
// Import master controller
const controller = require("../controller/apiController");

// set default API response
router.get("/",function(req,res){
    res.json({
        status : "success",
        message : "Welcome to master API"
    });
});


//export API routes 
module.exports = router;




