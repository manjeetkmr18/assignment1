const express = require("express");
const app = express();
const ejs = require("ejs");
const config = require("./config");
const userSchema = require("./models/userModel");

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

config.connect();

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


app.post("/g2test/saveuser", (req, res) => {
  console.log(req.body);
  userSchema.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.redirect("/");
});