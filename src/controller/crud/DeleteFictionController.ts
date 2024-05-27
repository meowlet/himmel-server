import Elysia from "elysia";
import * as FictionRepository from "../../repository/FictionRepository";
import { AuthPlugin } from "../../plugin/AuthPlugin";

export const DeleteFictionController = (app: Elysia) =>
  app.guard((app) =>
    app
      .use(AuthPlugin)
      .delete("/fiction/:id", async ({ decodedToken, params }) => {
        await FictionRepository.deleteFiction(
          params.id,
          decodedToken._id.toString(),
        );
      }),
  );
