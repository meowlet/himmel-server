import Elysia, { t } from "elysia";
import User from "../../model/User";
import * as UserRepository from "../../repository/UserRepository";

export const SignUpController = (app: Elysia) =>
  app
    .guard(
      {
        body: t.Object({
          userName: t.String(),
          email: t.String(),
          password: t.String(),
        }),
      },
      (app) =>
        app.post("/signup", async ({ body }) => {
          const user = new User({
            userName: body.userName,
            email: body.email,
            password: body.password,
          });
          await UserRepository.signUp(user);
          return user;
        }),
    )
    .get("/signup", async () => {
      return UserRepository.getAllUser();
    });
