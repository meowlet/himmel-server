import { Schema, model } from "mongoose";
import { IRole } from "./Interface";

export enum Action {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
}

export enum Resource {
  USER = "user",
  POST = "post",
  ROLE = "role",
  COMMENT = "comment",
  FICTION = "fiction",
}

const roleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    permissions: [
      {
        resource: {
          type: String,
          enum: Object.values(Resource),
          required: true,
        },
        actions: [
          { type: String, enum: Object.values(Action), required: true },
        ],
        _id: false,
      },
    ],
  },
  { timestamps: true },
);

export const Role = model<IRole>("Role", roleSchema);
