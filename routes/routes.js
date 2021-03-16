// filename : Routes.js

/* 
endn point summary :
Get   /  as  http://host/ : return a index page rendered from public controller  

*/

// initialize express router
const express =  require("express");
const router = express.Router();
// Import master controller
const publicController = require("../controller/publicController");

/* using router.route */
// router.get("/",function(req,res){
// your code here
// });
// set default route response
router.route("/")
.get(publicController.index)


//export API routes 
module.exports = router;




