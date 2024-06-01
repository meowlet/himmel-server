import Elysia from "elysia";
import { AddFictionController } from "../controller/crud/AddFictionController";
import { DeleteFictionController } from "../controller/crud/DeleteFictionController";
import { GetFictionController } from "../controller/crud/GetFictionsController";

export const FictionApplication = (app: Elysia) =>
  app
    .use(AddFictionController)
    .use(DeleteFictionController)
    .use(GetFictionController);
