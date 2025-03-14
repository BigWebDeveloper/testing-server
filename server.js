import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { productRouter } from "./routes/productRoute.js";
import bodyParser from "body-parser";

//app config
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

//DB connection
connectDB();

// middleware
app.use(bodyParser.json());
app.use(cors());

// api endpoints
app.use("/api/product", productRouter);

app.use("/", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

export default app;
