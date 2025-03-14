import { productModel } from "../models/productModel.js";

// all product list
export const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, data: "Error" });
  }
};