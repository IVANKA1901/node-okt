import { Schema, model } from "mongoose";

import handleMongooseError from "../helpers/handleMongooseError";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for note"],
    },
    description: {
      type: String,
      required: [true, "Set description for note"],
    },
  },
  { versionKey: false }
);

noteSchema.post("save", handleMongooseError);

const Note = model("note", noteSchema);

export default Note;
