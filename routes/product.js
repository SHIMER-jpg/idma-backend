var express = require("express");
var router = express.Router();

const { dumpLoad } = require("../controllers/product");

router.get("/dumpLoad", dumpLoad);

module.exports = router;
