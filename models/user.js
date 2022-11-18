const mongoose = require('mongoose');
const HairStyle = require('./HairStyle');
const bcrypt= require("bcrypt")
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const UserSchema = new Schema({
    Name: String,
    PhoneNumber: Number,
    Email: String,
    Password: String,

    Appointment: [{type: mongoose.Schema.Types.ObjectId,
        ref:'Appointment'}]

    
})

UserSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('Password')) return next();
    // password has been changed - salt and hash it 
    bcrypt.hash(user.Password, SALT_ROUNDS, function(err, hash){
        if(err) return next(err);
        //replace the user provided password with the hashed password
        user.Password = hash;
        next();
    })



})



const Users = mongoose.model('User', UserSchema)

module.exports = Users 