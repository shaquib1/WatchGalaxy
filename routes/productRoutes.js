import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductPhotoController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// all routes

// create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get All products
router.get("/get-product", getProductController);

// get single product
router.get("/getSingle-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", getProductPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// update routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);


// product filter
router.post('/product-filters',productFiltersController);

//product count 
router.get('/product-count' , productCountController)


//product per page
router.get('/product-list/:page' , productListController)


// search controller 
router.get('/search/:keyword' , searchProductController);

// similar products
router.get('/related-product/:pid/::cid' , relatedProductController)


export default router;
