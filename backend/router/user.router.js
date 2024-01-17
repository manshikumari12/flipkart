const express = require("express")
const {
    usersignup,
    userlogin,
    userlogout
} = require("../controller/user.controller")
userrouter = express.Router()



userrouter.post("/signup",usersignup)
userrouter.post("/login",userlogin)
userrouter.post("/logout",userlogout)




module.exports = {userrouter}

