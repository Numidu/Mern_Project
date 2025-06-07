import express from "express";
import { addProduct } from "../Controller/productcontroller.js";

const productRouter = express.Router();

productRouter.post("/", addProduct);

export default productRouter;
