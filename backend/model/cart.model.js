const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    userid: { type: String, required: true },
  quantity:{type:Number,default:0},
 
      image_url: { type: Object, required: true },
    brand: { type: String, required: true },
    subtext: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    offer: { type: Number, required: true },
    category: { type: String, required: true },
    gender: { type: String },
    rating:{type:Number},
    discount:{type:Number}
})
const cartModel = mongoose.model("cart",cartSchema)

module.exports = {cartModel}