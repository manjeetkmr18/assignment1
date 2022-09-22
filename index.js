const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/g2test", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/g2test.html"));
});

app.get("/gtest", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/gtest.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});
