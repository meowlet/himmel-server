import { Schema, model } from "mongoose";
import { IChapter } from "./Interface";
import "./database/db.setup";

const chapterSchema = new Schema<IChapter>({
  title: { type: String, required: true },
  index: { type: Number, required: true, unique: true },
});

export const Chapter = model<IChapter>("Chapter", chapterSchema);
