// filename : Routes.js

/* 
end point summary :
Get   /  as  http://host/api/ : return a json message from apiController  
*/

// initialize express router
const router = require("express").Router();
// Import master controller
const apiController = require("../controller/apiController");

/* using router.route */
// router.get("/",function(req,res){
// your code here
// });

/* using router.route */
// set default API response
router.route("/")
.get(apiController.index)

// add to sample collection
router.route("/sample")
.post(apiController.insert)

//export API routes 
module.exports = router;




