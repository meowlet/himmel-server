import { Types } from "mongoose";
import { Action, Resource } from "./Role";

export interface IUser {
  email: string;
  userName: string;
  password: string;
  displayName: string;
  roles: Array<Types.ObjectId>;
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

export interface IRole {
  name: string;
  description: string;
  permissions: { resource: Resource; actions: Action[] }[];
}
