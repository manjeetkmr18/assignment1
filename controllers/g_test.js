const userModel = require("../models/userModel");

module.exports = async (req, res) => {

    try {
        const user = await userModel.findOne({ _id: req.session.userId });
        console.log(user);
        res.setHeader('Content-Type', 'text/html');
        res.render("gtest", { usermodel: user });
    } catch (err) {
        console.log(err);
    }
};