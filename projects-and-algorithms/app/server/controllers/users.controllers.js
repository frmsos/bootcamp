const User = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {

    registerUser: async (req, res) =>{
        console.log(req.body)
        try{
            const newUser = await User.create(req.body);
            console.log('new usewr', newUser)
            const userToken = jwt.sign({_id:newUser._id}, SECRET)
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 60000)})
            .json({successMessage:"Usuario registrado ", user:newUser})
            //console.log("userto", userToken)
        }catch(error){
            res.status(401).json(error)
        }
    },

    loginUser: async (req, res)=>{
        const user = await User.findOne({email:req.body.email})
        console.log(" login user is", user )
        if(!user){
            res.status(400).json({error: "Incorrect credentials, try again..."})
        }
        try{
            const validPass = await bcrypt.compare(req.body.password, user.password )
            //console.log(validPass, " PASSWORD VALIDA")
            if(!validPass){
                res.status(400).json({error: "Incorrect credentials, try again..."})
            }else{
                const userToken = jwt.sign({_id:user._id}, SECRET)
                console.log(userToken)
                res.status(201).cookie('userToken', userToken, {httpOnly:false, expires:new Date(Date.now() + 1800000)}).json({successMessage:"User login OK "})
            }
        }catch(error){
            res.status(400).json({error: "Incorrect credentials, try again..."})
        }
    },
    logOutUser:(req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'User logout'})
    }
}