const express = require('express')
const router = express.Router()

const appointmentCtrl = require("../controllers/appointmentController")

router.post("/new", appointmentCtrl.newAppointment)

module.exports = router