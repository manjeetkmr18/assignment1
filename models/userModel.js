const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    LicenseNo: String,
    Age: Number,
    car_details: {
        make: String,
        model: String,
        year: Number,
        platno: String
    }
});

module.exports = mongoose.model('User', userSchema);