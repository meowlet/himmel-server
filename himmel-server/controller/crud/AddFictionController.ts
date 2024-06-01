import Elysia, { t } from "elysia";
import { Fiction } from "../../model/Fiction";
import { Types } from "mongoose";
import * as FictionRepository from "../../repository/FictionRepository";
import { AuthPlugin } from "../../plugin/AuthPlugin";

export const AddFictionController = (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        title: t.String(),
        description: t.String(),
        status: t.Enum({
          Finished: "finished",
          Ongoing: "ongoing",
          Hiatus: "hiatus",
        }),
      }),
    },
    (app) =>
      app.use(AuthPlugin).post("/fiction", async ({ body, decodedToken }) => {
        const fiction = new Fiction({
          title: body.title,
          author: new Types.ObjectId(decodedToken.userId),
          description: body.description,
          status: body.status,
        });
        await FictionRepository.addFiction(fiction);
        return fiction;
      }),
  );
