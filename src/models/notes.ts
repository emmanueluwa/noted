import { Schema, model } from "mongoose";

const note = {
  title: "title of note",
  description: "",
};

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
});

export default model("Note", noteSchema);
