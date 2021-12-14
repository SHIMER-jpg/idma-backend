var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var axios = require("axios");
require("dotenv").config();
require("./db");

axios.defaults.headers.common["User-Agent"] =
  "MyApp (santiagoalejadiaz@gmail.com)";

axios.defaults.headers.common[
  "Authentication"
] = `${process.env.TIENDA_NUBE_TOKEN_TYPE} ${process.env.TIENDA_NUBE_ACCESS_TOKEN}`;

//import routings
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var departureRouter = require("./routes/departure");
var materialRouter = require("./routes/material");
var orderItemRouter = require("./routes/orderItem");
var producerRouter = require("./routes/producer");
var product = require("./routes/product");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "*",
  })
);

//Routings
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/departure", departureRouter);
app.use("/material", materialRouter);
app.use("/orderItem", orderItemRouter);
app.use("/producer", producerRouter);
app.use("/product", product);

module.exports = app;
