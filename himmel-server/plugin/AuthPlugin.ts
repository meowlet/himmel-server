import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

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
      const decodedToken = await jwt.verify(token);
      if (!decodedToken) {
        throw new Error("Error authenticating");
      } else {
        return {
          decodedToken: decodedToken as { userId: string },
        };
      }
    });
