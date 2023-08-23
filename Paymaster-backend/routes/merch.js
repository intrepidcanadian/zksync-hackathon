
const express = require("express");
const router = express.Router();
const merchinfo = require("../controllers/merchinfo");
const cors = require("cors");

// Enable CORS for all routes in this router
router.use(cors());

router
  .route("/") 
  .get(merchinfo.getExclusiveMerch)


module.exports = router;
