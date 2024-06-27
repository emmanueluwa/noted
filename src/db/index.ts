import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/notees")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("DB Connection Failed: ", err);
  });
