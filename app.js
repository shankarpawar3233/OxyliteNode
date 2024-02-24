const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.raw());
app.use(bodyparser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
const connect = require("./db.config");
const signUp = require("./routes/signup");
const customer = require("./routes/customer");
const plant = require("./routes/plant");
const product = require("./routes/product");
const orders = require("./routes/orders");
const employee = require("./routes/employee");
const loadunload= require('./routes/loadunload')
const monthlycard = require("./routes/monthlycard")
const delevery=require('./routes/delevery');
const payment=require('./routes/payment')
const invoice=require('./routes/reports/invoices');
app.use("/api", signUp, customer, plant, product, orders, employee,loadunload,monthlycard,delevery,payment,invoice);

app.listen(2000, function () {
  console.log("server is running on 2000");
}); 
