import express from 'express'
import {listProduct } from "../controllers/productController.js";

export const productRouter = express.Router();

productRouter.get("/list", listProduct);