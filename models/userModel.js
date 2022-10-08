const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    LicenseNo: {
        type: String,
        unique: true,
        required: true
    },
    Age: Number,
    car_details: {
        make: String,
        model: String,
        year: Number,
        platno: String
    }
});

module.exports = mongoose.model('User', userSchema);