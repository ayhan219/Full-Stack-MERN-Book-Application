import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get("/", (req, res) => {});

//Route for save a new Book

app.use("/books",booksRoute);


mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("App connected o DB");
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
