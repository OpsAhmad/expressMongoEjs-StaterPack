// filename : Routes.js

/* 
endn point summary :

*/

// initialize express router
const express =  require("express");
const router = express.Router();
// Import master controller
const publicController = require("../controller/publicController");


// set default API response
router.route("/")
.get(publicController.index)


//export API routes 
module.exports = router;




