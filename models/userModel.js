const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
        },
    lastname: {
        type: String,
        required: true
    },
    LicenseNo: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        required: true
    },
    car_details: {
        make: String,
        model: String,
        year: Number,
        platno: String
    }
});

module.exports = mongoose.model('User', userSchema);