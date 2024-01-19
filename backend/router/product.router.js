const express = require("express")
const {
        createproduct,
allproduct
}  =require("../controller/product.controller")
productrouter = express.Router()



productrouter.post("/create",createproduct)
productrouter.get("/all",allproduct)





module.exports = {productrouter}