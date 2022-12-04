const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstname: {
        type: String
        },
    lastname: {
        type: String
    },
    LicenseNo: {
        type: String,
        unique: [true, 'License number already exists']
    },
    Age: {
        type: Number
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    user_type: {
        type: String
    },
    car_details: {
        make: String,
        model: String,
        year: Number,
        platno: String
    },
});

    userSchema.pre('save', function (next) {
        const user = this;
        bcrypt.hash(user.LicenseNo, 10, function (error, encrypted) {
            user.LicenseNo = encrypted;
            next()
        })
    });

    userSchema.pre('save', function (next) {
        const user = this;
        bcrypt.hash(user.password, 10, function (error, encrypted) {
            user.password = encrypted;
            next()
        })
    });

module.exports = mongoose.model('User', userSchema);