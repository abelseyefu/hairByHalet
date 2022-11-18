const express = require('express')
const router = express.Router()

const hairStyleCtrl = require("../controllers/hairStyleController")

router.get("/", hairStyleCtrl.showAll)











module.exports = router