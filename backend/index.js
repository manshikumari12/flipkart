const express = require("express")
const app = express()
const {connection} = require("./db")
const {userrouter} =  require("./router/user.router")
const {productrouter}=  require("./router/product.router")
const {cartrouter}  =require("./router/cart.router")
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.use("/user",userrouter)
app.use("/product",productrouter)
app.use("/cart",cartrouter)

app.listen("3111",async()=>{
    try {
        await connection
        console.log("connected to data-base")
    } catch (error) {
        console.log(error)
        
    }
    console.log(`server is running on the port`)
})
