import jwt from "@elysiajs/jwt";
import * as UserRepository from "../../repository/UserRepository";
import Elysia, { t } from "elysia";

export const SignInController = async (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        identifier: t.String(),
        password: t.String(),
      }),
    },
    (app) =>
      app
        .use(
          jwt({
            name: "jwt",
            secret: process.env.JWT_SECRET || "The ultimate secret",
            exp: 2 * 86400,
          }),
        )
        .derive(async ({ body, jwt }) => {
          const user = await UserRepository.signIn(
            body.identifier,
            body.password,
          );

          return {
            token: await jwt.sign({
              userId: user._id.toString(),
            }),
          };
        })
        .post("/signin", async ({ token, set }) => {
          set.headers["authorization"] = `Bearer ${token}`;
          console.log("token", token);
        }),
  );
