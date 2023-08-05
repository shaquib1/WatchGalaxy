import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return resizeBy.send({ message: "Name is required" });
    }
    if (!email) {
      return resizeBy.send({ message: "Email is required" });
    }
    if (!password) {
      return resizeBy.send({ message: "Password is required" });
    }
    if (!phone) {
      return resizeBy.send({ message: "Phone is required" });
    }
    if (!address) {
      return resizeBy.send({ message: "Address is required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });

    //existing user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "user Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register",
      error,
    });
  }
};

// post login

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not resgisterd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // token
    const token = await JWT.sign(
      { _id: user._id },
      process.env.jwt_secreat_key,
      { expiresIn: "7d",}
    );
   res.status(200).send({
    success:true,
    message:"login successfully",
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address
    },
    token,
   })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};


// testController
 export const testController = async(req , res) =>{
  res.send("hello this is testig router to protected");
 }