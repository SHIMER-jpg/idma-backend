var express = require("express");
var router = express.Router();
const {
  dumpLoadOrders,
  createOrderItem,
  getOrders,
} = require("../controllers/orderItem");

router.get("/dumpLoad", dumpLoadOrders);
router.get("/getOrders", getOrders);

module.exports = router;
