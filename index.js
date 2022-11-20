const express = require("express");
const app = express();
const ejs = require("ejs");
const config = require("./config");
const userModel = require("./models/userModel");
const bcrypt = require('bcrypt');
const expressSession = require('express-session')
const { resourceUsage } = require('process')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const LoginUserController = require("./controllers/loginUser");
const NewUserController = require("./controllers/newUser");
const LoginPageController = require("./controllers/loginPage");
const UpdateCarDetailsController = require("./controllers/updateCarDetailsUser");
const updateUser = require("./controllers/updateUser");
const logoutController = require('./controllers/logout');
const g2_test = require("./controllers/g2_test");
const g_test = require("./controllers/g_test");

const authMiddleware = require('./middleware/authMiddleware')

config.connect();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.use(expressSession({
  secret: 'keyboard cat'
}))

global.loggedIn = null;
global.userType = null;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId
  userType = req.session.userType
  console.log(loggedIn);
  console.log(userType);
  next()
})


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/login", LoginPageController);
app.post('/user/login', LoginUserController);
app.post('/user/register', NewUserController);
app.get("/g2test", authMiddleware, g2_test);
app.get("/gtest", authMiddleware, g_test);
app.post("/gtest/updateuser:licNumber", authMiddleware, UpdateCarDetailsController);
app.post("/g2test/saveuser", authMiddleware, updateUser);
app.get('/logout', logoutController);


app.use((req, res) => {
  res.render('notfound')
})