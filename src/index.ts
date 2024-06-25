import express from "express";

//create server
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</>")
})

app.listen(8000, () => {
  console.log("listening");
});
