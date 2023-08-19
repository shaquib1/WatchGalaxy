import express from "express";
import {
  forgotPasswordController,
  getAllOrderController,
  getOrderController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

// routing
// register || post method
router.post("/register", registerController);

// login || post method
router.post("/login", loginController);

// forgot password || post method
router.post("/forgot-password", forgotPasswordController);

// test router
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth for admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfileController);

// users Check all orders
router.get("/orders", requireSignIn, getOrderController);


// Admin check All orders
router.get("/all-orders", requireSignIn, isAdmin , getAllOrderController);

//order status update
router.put("/order-status/:orderId" , requireSignIn , isAdmin , orderStatusController);

export default router;
