import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routing/userRouter.js";
import producrRouter from "./Routing/productRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  let token = req.header("Authorization");

  if (token != null) {
    token = token.replace("Bearer ", "");

    jwt.verify(token, "kv123", (err, decoded) => {
      console.log(err);
      if (!err) {
        req.users = decoded;
      }
    });
  }

  next();
});

let mongourl = process.env.Mongo_Url;

mongoose.connect(mongourl);
let connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo connection sucess");
});

app.use("/api/users", userRouter);
app.use("/api/product", producrRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
