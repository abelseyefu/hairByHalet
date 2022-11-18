const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema ({
    name: String,
    appointmentDate: Date,
    appointmentTime: String,
    
    HairStyles: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'HairStyles'}]
   
})

const Appointments  = mongoose.model('Appointment',AppointmentSchema)

module.exports = Appointments

// Appointment: [{type: mongoose.Schema.Types.ObjectId,
//     ref:'Appointment'}]