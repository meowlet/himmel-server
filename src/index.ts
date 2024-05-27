import { Elysia } from "elysia";
import "./database/MongoDBSetup";
import { getErrorMessage } from "./util/Error";
import { UserApplication } from "./app/UserApp";
import { FictionApplication } from "./app/FictionApp";

new Elysia()
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return "Not Found :(";
    } else if (code === "UNKNOWN") {
      set.status = 500;
    }
    return new Response(`Error: ${getErrorMessage(error)} (${code})`);
  })
  .group("/api", (app) => app.use(UserApplication).use(FictionApplication))
  .listen(3000, (app) => {
    console.log(`🦊 Elysia is running at ${app.hostname}:${app.port}`);
  });
