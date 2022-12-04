const appointmentSchema = require('../models/appointmentModel');

const checkSlots = async (req, res) => {
    const slots = await appointmentSchema.find({
        date: req.body.date
    });
    if (slots) {
       res.status(200).send(slots);
   } else {
         res.status(400).send("No slots available");
    }
}

module.exports = checkSlots;