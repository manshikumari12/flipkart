const {cartModel}=require("../model/cart.model")
const {UserModel} =  require("../model/user.model")


const jwt=require("jsonwebtoken")
// router.post('/add', async (req, res) => {
//     try {
//         const { userId, title, image, price, desc, qty } = req.body;

//         // Create a new cart item
//         const newCartItem = new cartModel({
//             userId,
//             title,
//             image,
//             price,
//             desc,
//             qty
//         });

//         // Save the new cart item to the database
//         await newCartItem.save();

//         res.json({ message: 'Item added to the cart', cartItem: newCartItem });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });

// // Route to get all items from the cart for a specific user
// router.get('/get/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;

//         // Retrieve all items from the cart for the specified user
//         const userCartItems = await cartModel.find({ userId });

//         res.json({ cartItems: userCartItems });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });
const createcartdata = async (req, res) => {
    try {
        const payload = req.body;

   const cart =new cartModel(payload)
    await cart.save()
       res.status(200).send({"msg":"Product has been added in cart"})

       
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
};

const allcartdata = async (req, res) => {
    try {
        // Assuming you have a model named CartModel to interact with the database
        const cartData = await cartModel.find({ userId: req.userid}); // Replace with the actual field and value to identify the user

        // You can modify the response based on your requirements
        res.status(200).json({ success: true, data: cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    createcartdata,
allcartdata
}