import Elysia from "elysia";
import { SignInController } from "../controller/SignInController";
import { SignUpController } from "../controller/SignUpController";

export const UserApplication = (app: Elysia) =>
  app.use(SignUpController).use(SignInController);
