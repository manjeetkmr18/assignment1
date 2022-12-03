const userModel = require('../models/userModel');

module.exports = async(req, res) => {
    var query = {
        _id: req.session.userId
    };
   await userModel.updateOne(
       query,
       {
                "firstname": req.body.firstName,
                "lastname": req.body.lastName,
               "LicenseNo": req.body.licNumber,
               "Age": req.body.age,
               "car_details": {
                   "make": req.body.carMake,
                   "model": req.body.carModel,
                   "year": req.body.carYear,
                   "platno": req.body.plateNumber
               }
         }
    ).then(() => {
        console.warn("User updated");
        res.redirect("/");
    });
};