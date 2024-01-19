const express = require("express")
const  {
     createcartdata,
allcartdata
} =require("../controller/cart.controller")
// const {isAuthenticated} = require("../auth/cart.auth")
cartrouter = express.Router()



cartrouter.post("/createcart",createcartdata)
cartrouter.get("/allcart",allcartdata)





module.exports = {cartrouter}