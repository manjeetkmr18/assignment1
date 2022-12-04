const appointmentSchema = require('../models/appointmentModel');

const createSlots = async (req, res) => {
    try {
        const appointment = new appointmentSchema({
            date: req.body.date,
            time: req.body.time,
            isTimeSlotAvailable: req.body.isTimeSlotAvailable
        });
        await appointment.save();
        res.redirect('/appointment');
    } catch (error) {
        res.status(400).send
    }
}

module.exports = createSlots;