import express from "express";
import "./db";
import noteRouter from "./routers/note";
import cors from "cors";

//create server
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/note", noteRouter);

app.listen(8000, () => {
  console.log("listening");
});
