import ProductController from './product';
import CategoryController from './category';
import ShoppingCartController from './shoppingcart';
import express from "express";


const router: express.Router = express.Router();


router.use("/product", ProductController);
router.use("/category", CategoryController);
router.use("/shoppingcart", ShoppingCartController);


export default router;