const {productModel}= require("../model/product.model")

const createproduct = async(req,res)=>{
const payload = req.body
try {
    const product =new productModel(payload)
    await product.save()
       res.status(200).send({"msg":"Product has been added"})
} catch (error) {
     res.status(400).send({"msg":error.message})
}
}
const allproduct =async(req,res)=>{
try {
    const allproduct = await productModel.find()
    res.send({msg:"lsit of product ",allproduct})
} catch (error) {
       res.status(400).send({"msg":error.message})
}
}

module.exports ={
    createproduct,
allproduct
}

//  try {
//         const products=new productModel(payload)
//         await products.save()
//         res.status(200).send({"msg":"Product has been added"})
//     } catch (error) {
//         res.status(400).send({"msg":error.message})
//     }