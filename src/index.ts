import express from "express";
import "./db";

//create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Ich listening" });
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.json({ message: "ready to create" });
});

app.listen(8000, () => {
  console.log("listening");
});
