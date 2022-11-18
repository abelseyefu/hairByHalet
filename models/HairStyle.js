const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const hairStyleSchema = new Schema ({
    Name: String,
    image: String,
    
    
    
    
})
const HairStyles  = mongoose.model('Hairstyle', hairStyleSchema)

module.exports = HairStyles
