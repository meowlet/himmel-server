import Elysia from "elysia";
import * as FictionRepository from "../../repository/FictionRepository";

export const GetFictionController = (app: Elysia) =>
  app.guard((app) =>
    app
      .get("/fiction/:id", async ({ params }) => {
        return await FictionRepository.getFictionById(params.id);
      })
      .get("/fiction", async () => {
        return await FictionRepository.getAllFiction();
      }),
  );
