import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export interface CustomRequest extends Request {
  token: string;
}

export const AuthPlugin = async (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "The ultimate secret",
      }),
    )
    .derive(async ({ headers, jwt }) => {
      const token = headers["authorization"]?.replace("Bearer ", "");
      if (!token) {
        throw new Error("Please authenticate");
      }
      return {
        decodedToken: await jwt.verify(token),
      };
    });
