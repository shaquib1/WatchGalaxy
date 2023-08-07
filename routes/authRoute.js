import express from "express";
import { forgotPasswordController, loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";



//router object
const router = express.Router();


// routing
// register || post method
router.post('/register' , registerController)

// login || post method
router.post('/login' , loginController)

// forgot password || post method
router.post("/forgot-password" , forgotPasswordController)

// test router
router.get('/test' , requireSignIn, isAdmin ,testController)

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;