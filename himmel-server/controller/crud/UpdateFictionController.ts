import Elysia, { t } from "elysia";
import { AuthPlugin } from "../../plugin/AuthPlugin";
import * as FictionRepository from "../../repository/FictionRepository";
import { IFiction } from "../../model/Interface";

export const UpdateFictionController = (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        fictionId: t.String(),
        newTitle: t.Optional(t.String()),
        newDesc: t.Optional(t.String()),
        newStatus: t.Optional(t.String()),
      }),
    },
    (app) =>
      app.use(AuthPlugin).patch("/fiction/", async ({ decodedToken, body }) => {
        return await FictionRepository.updateFiction(
          body.fictionId,
          decodedToken.userId,
          {
            _id: body.fictionId,
            title: body.newTitle,
            description: body.newDesc,
            status: body.newStatus,
          } as Partial<IFiction>,
        );
      }),
  );
