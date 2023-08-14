import { Response, Request } from "express";

import Note from "../../models/notes-model";
import HttpError from "../../helpers/HttpError";

const getAllNotes = async (req: Request, res: Response): Promise<void> => {
  const result = await Note.find();

  res.status(200).json(result);
};

const getNoteById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await Note.findById({ _id: id });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

const saveNote = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  let note;
  note = await Note.create({ title, description });

  res.status(201).json(note);
};

const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await Note.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(201).json(result);
};

const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await Note.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Note is sucessfully deleted",
  });
};

export const notesControllers = {
  getAllNotes,
  getNoteById,
  saveNote,
  updateNote,
  deleteNote,
};
