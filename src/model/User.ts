import { Schema, model } from "mongoose";
import { IUser } from "./Interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const saltRound = 8;

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRound);
  }
  next();
});

export default model<IUser>("User", userSchema);
