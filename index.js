const express = require("express");
const app = express();
const ejs = require("ejs");
const config = require("./config");
const UserModel = require("./models/userModel");

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
  UserModel.create({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    LicenseNo: req.body.licNumber,
    Age: req.body.age,
    car_details: {
      make: req.body.carMake,
      model: req.body.carModel,
      year: req.body.carYear,
      platno: req.body.plateNumber
    }
  }).then(() => {
    console.log("User created");
    res.redirect("/");
  });
});