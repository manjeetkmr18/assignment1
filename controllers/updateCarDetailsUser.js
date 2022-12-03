const userModel = require('../models/userModel');

module.exports = (req, res) => {
    var query = {
        _id: req.session.userId
    };
    userModel.updateOne(
        query, {
        car_details: {
            "make": req.body.carMake,
            "model": req.body.carModel,
            "year": req.body.carYear,
            "platno": req.body.plateNumber
        }
    }).then(() => {
        res.redirect("/");
    });
};