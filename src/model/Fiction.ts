import { Schema, model } from "mongoose";
import { IFiction } from "./Interface";

const fictionSchema = new Schema<IFiction>(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    content: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
    status: String,
  },
  { timestamps: true },
);
export const Fiction = model<IFiction>("Fiction", fictionSchema);
