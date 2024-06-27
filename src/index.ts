import express from "express";
import "./db";
import Note, { NoteDocument } from "./models/notes";

//create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Ich listening" });
});

interface IncomingBody {
  title: string;
  description?: string;
}

app.post("/create", async (req, res) => {
  //create and save
  await Note.create<NoteDocument>({
    title: (req.body as IncomingBody).title,
    description: (req.body as IncomingBody).description,
  });

  res.json({ message: "ready to create" });
});

app.patch("/:noteId", async (req, res) => {
  const { noteId } = req.params;
  const { title, description } = req.body as IncomingBody;

  const note = await Note.findByIdAndUpdate(
    noteId,
    { title, description },
    { new: true }
  );
  if (!note) return res.json({ error: "Note not found!" });

  res.json({ note });
});

app.listen(8000, () => {
  console.log("listening");
});
