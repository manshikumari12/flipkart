const {UserModel}= require("../model/user.model")
const bcrypt = require("bcrypt")


const jwt = require("jsonwebtoken")
const usersignup = async (req,res) => {
    try {
        const {email,name,password } = req.body
        // console.log(email,name,password )
        const userexist = await UserModel.findOne({email})
    
        if(userexist){
            return res.status(400).send({ msg: "User Already Exists. Please Login!!" });
        }
    
    
        bcrypt.hash(password,5, async(err,hash)=>{
            const newuser  = UserModel ({email,name,password:hash})
            await newuser.save()
            res.status(200).send({ msg: "Registration Successful",newuser });
        })
    
    } catch (error) {
        res.status(400).send({ msg: "Error Ocurred" });
    }   
}
const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).send({ msg: "User Does not Exist, Kindly Register First!!" });
        }

        const passwordMatching = await bcrypt.compare(password, user.password);

        if (!passwordMatching) {
            return res.status(401).send({ msg: "Invalid Credentials" });
        }

        const token = jwt.sign({ userID: user._id }, "secretKey", { expiresIn: "2h" });
        console.log({ userID: user._id });
        res.status(200).json({ msg: "Login Successful", token,userID: user._id});

    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

const userlogout = async (req, res) => {
    // Implement logout functionality if needed
};
module.exports = {
     usersignup,
     userlogin,
     userlogout
}