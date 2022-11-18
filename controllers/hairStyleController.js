const HairStyles = require("../models/HairStyle")


const showAll = (req,res) => {
    HairStyles.find({}, (err, hairstyles)=>{
        if(err){
            res.status(400).json(err)
            return
        }
            res.json(hairstyles)
    })
}

module.exports = {showAll}