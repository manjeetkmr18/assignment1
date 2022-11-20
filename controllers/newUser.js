const userSchma = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    console.log(req.body);
    userSchma.create(
        {
            firstname: "",
            lastname: "",
            LicenseNo: "",
            Age: "",
            username: req.body.username,
            password: req.body.password,
            user_type: req.body.user_type,
            car_details: {
                make: "",
                model: "",
                year: "",
                platno: ""
            },
        },
        (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
};