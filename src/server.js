const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env || 8888;
const hostname = process.env.HOST_NAME;
// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//khai bao router
app.get("/hocdi", (req, res) => {
  res.render("sample.ejs");
});
app.get("/thangngu", (req, res) => {
  res.render("hocdi.ejs");
});
app.listen(port, hostname, () => {
  console.log(`example app listenning on port ${port}`);
});
