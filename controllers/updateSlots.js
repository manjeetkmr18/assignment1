const appointmentSchema = require('../models/appointmentModel');

const updateSlot = async (req, res) => {
    const slots = await appointmentSchema.findOneAndUpdate({
        date: req.body.date,
        time: req.body.time
    }, {
        isTimeSlotAvailable: false
    });
    if (slots) {
        console.log(slots);
        console.log("Slot updated");
        res.status(200).send(slots);
    } else {
        res.status(400).send("No slots available");
    }
}

module.exports = updateSlot;