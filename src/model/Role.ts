import { Schema, model } from "mongoose";
import { IRole } from "./Interface";

const roleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    permissions: [
      {
        resource: { type: String, required: true },
        actions: [{ type: String, required: true }],
        _id: false,
      },
    ],
  },
  { timestamps: true },
);

export const Role = model<IRole>("Role", roleSchema);
