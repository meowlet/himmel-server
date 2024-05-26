import jwt from "@elysiajs/jwt";
import * as UserService from "../service/UserService";
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
          const user = await UserService.signIn(body.identifier, body.password);
          return {
            token: await jwt.sign({ _id: user._id.toString() }),
          };
        })
        .post("/signin", async ({ token, set }) => {
          set.headers["authorization"] = `Bearer ${token}`;
        }),
  );
