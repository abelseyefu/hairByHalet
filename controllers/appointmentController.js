const Appointments = require("../models/Appointment")

const newAppointment = (req, res) => {
    Appointments.create(req.body)
     .then((appointments)=>{
        Appointments.find({}, (err, appointments)=>{
            res.json(appointments)
        })
    })
}







module.exports = {newAppointment}