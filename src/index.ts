import express from "express";
import "./db";
import noteRouter from "./routers/note";

//create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Ich listening" });
});

app.use("/note", noteRouter);

app.listen(8000, () => {
  console.log("listening");
});
