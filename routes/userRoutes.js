const express = require('express')
const router = express.Router()

const userCtrl = require ('../controllers/userController.js')

// CREATE A USER IN THE DATABASE 

router.get('/', userCtrl.index)
router.post('/new', userCtrl.createNewUser)
router.post('/logIn', userCtrl.logIn)








module.exports = router