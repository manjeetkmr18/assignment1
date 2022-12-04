const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    isTimeSlotAvailable: {
        type: Boolean,
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);