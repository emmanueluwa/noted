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

  const note = await Note.findById(noteId);
  if (!note) return res.json({ error: "Note not found!" });

  const { title, description } = req.body as IncomingBody;

  if (title) note.title = title;
  if (description) note.description = description;

  await note.save();

  res.json({ note });
});

app.listen(8000, () => {
  console.log("listening");
});
