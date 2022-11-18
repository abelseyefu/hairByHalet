const Users = require("../models/user.js")
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const bcrypt= require('bcrypt')


function createJWT(user){
    return jwt.sign(
        {user}, //data payload
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}




const index = (req, res ) => {
    Users.find({}, (err, users)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(users)
    })
}


async function createNewUser(req, res){
    const user = await Users.create(req.body)
    
    try {
        
        //send back jwt token instead of user
        console.log(user)
        console.log(process.env.SECRET)
        const token = createJWT(user)
        console.log(token)
        res.json({token})
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }


}

function logIn(req, res){
    console.log("login ping reached")
   Users.findOne({Email: req.body.Email})
  

       .then(user =>{
           if(!user){
               res.json({msg: 'Please create an account'})
               return
           } 
           const pwValid = bcrypt.compareSync(req.body.Password, user.Password)
           if(pwValid == false){
            res.json({msg: 'you have entered the wrong password'})
           } else{
            const token = createJWT(user)
            console.log(token)
            res.json({token})
           }
       })
    } 
    



// async function createNewUser(req, res) {
//     Users.create(req.body)
//      .then((users)=>{
//         Users.find({}, (err, user)=>{
//             res.json(user)
//         })
//     })
// }






module.exports = {index, createNewUser, logIn }