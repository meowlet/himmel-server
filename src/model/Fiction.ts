import { Schema, Types, model } from "mongoose";
import { IFiction } from "./Interface";
import { ObjectId } from "mongodb";

const fictionSchema = new Schema<IFiction>({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  content: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
  status: String,
});
export const Fiction = model<IFiction>("Fiction", fictionSchema);
