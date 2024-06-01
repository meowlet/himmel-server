import Elysia from "elysia";
import { SignInController } from "../controller/auth/SignInController";
import { SignUpController } from "../controller/auth/SignUpController";

export const UserApplication = (app: Elysia) =>
  app.use(SignUpController).use(SignInController);
