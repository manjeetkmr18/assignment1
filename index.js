const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/g2test", (req, res) => {
  res.render("g2test");
});

app.get("/gtest", (req, res) => {
  res.render("gtest");
});
app.get("/login", (req, res) => {
  res.render("login");
});
