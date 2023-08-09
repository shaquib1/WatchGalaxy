import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";


 const router = express.Router()

 // routes

 // create product
  router.post('/create-product',  requireSignIn , isAdmin , formidable() ,createProductController);

//get All products
router.get('/get-product' , getProductController)

// get single product
router.get('/getSingle-product/:slug' , getSingleProductController);

// get photo 
router.get('/product-photo/:pid' , getProductPhotoController);

// delete product
router.delete('/delete-product/:pid', deleteProductController);


 // update routes
 router.put('/update-product/:pid',  requireSignIn , isAdmin , formidable() ,updateProductController);


  export default router