const { router } = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//imported routes
const User = require('../mongoose_model/User')

router.post('/register', async (req,res)=>{
    const { first_name, last_name, username, email, age, date_of_birth, country} = req.body
    
   const user = new User({
       first_name,
       last_name, 
       username, 
       email, 
       age, 
       date_of_birth, 
       country, 
       password: encryptedPassword,
       role: user
   })
   try {
       const newUser = await user.save();
       console.log(newUser);
       
   } catch (error) {
       res.send(error)
   }
})

router.post('/login', async (req,res)=>{
    //check if the email is correct
    const userEmail = await User.findOne({ email })
    if (!userEmail) res.send("Email dosen't exist")

    //check if the password is correct
    const correctPassword = await User.findOne({ email })
    if (!correctPassword) res.send("Password isn't correct")
})


module.exports= router

