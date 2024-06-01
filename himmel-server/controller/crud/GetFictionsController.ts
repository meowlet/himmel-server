import Elysia, { t } from "elysia";
import * as FictionRepository from "../../repository/FictionRepository";
import { AuthPlugin } from "../../plugin/AuthPlugin";

export const GetFictionController = (app: Elysia) =>
  app.guard((app) =>
    app.get("/fiction/:id", async ({ params }) => {
      return await FictionRepository.getFictionById(params.id);
    }),
  );
