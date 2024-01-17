const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    userID: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    qty: { type: Number, required: true },
})
const cartModel = mongoose.model("cart",cartSchema)

module.exports = {cartModel}