const express = require("express")
 const {
    addproducts,
allproductshort,
deleteproducts,
filterproduct,
Byidproduct
 } = require("../controller/product.controller")
prouctRouter =  express.Router()

productRouter.get("/addproducts",addproducts)
productRouter.get("/",allproductshort)
productRouter.delete("/delete",deleteproducts)
productRouter.get("/filter",filterproduct)
productRouter.get("/:id",Byidproduct)


module.exports ={prouctRouter}



// productRouter.get("/addProducts", async (req, res) => {
//     try {
//       await ProductModel.insertMany();
//       res.send("Data added successfully");
//     } catch (error) {
//       res.send({ msg: "Something went wrong", error: error.message });
//     }
//   });
  
  // get products
  
//   productRouter.get("/", async (req, res) => {
//     const query = req.query;
//     try {
//       if (query.min && query.max) {
//         product = await ProductModel.find({
//           $and: [{ price: { $gte: query.min } }, { price: { $lte: query.max } }],
//         });
//       } else if (query.offer) {
//         product = await ProductModel.find({
//           offer: { $gte: query.offer }}
//         );
        
//       } else {
//         product = await ProductModel.find(query);
//       }
//       res.send(product);
  
//     } catch (error) {
//       res.send({ msg: "Something went wrong", error: error.message });
//     }
//   });
  
  // delete products
  
//   productRouter.delete("/delete", async (req, res) => {
//     const q = req.query;
//     console.log(q);
//     try {
//       await ProductModel.deleteMany(q);
//       res.send("Products deleted successfully");
//     } catch (error) {
//       res.send({ msg: "Something went wrong", error: error.message });
//     }
//   });
  
  // filter the products
  
//   productRouter.get("/filter", async (req, res) => {
//     const filteredProducts = await ProductModel.find(req.query);
//     console.log(req.query);
//     res.send(filteredProducts);
//   });
  
//   // get single product
  
//   productRouter.get("/:id", async (req, res) => {
//     try {
//       const product = await ProductModel.findById(req.params.id);
//       res.status(200).send({ success: true, product });
//     } catch (error) {
//       res.status(404).send({ error: error.message });
//     }
//   });