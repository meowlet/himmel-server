import { Types } from "mongoose";

export interface IUser {
  email: string;
  userName: string;
  password: string;
  displayName: string;
  bio: string;
}

export interface IFiction {
  title: string;
  author: Types.ObjectId;
  description: string;
  content: Types.ObjectId[];
  status: "finished" | "ongoing" | "hiatus";
}

export interface IChapter {
  title: string;
  index: number;
}
