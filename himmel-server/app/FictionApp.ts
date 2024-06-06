import Elysia from "elysia";
import { AddFictionController } from "../controller/crud/AddFictionController";
import { DeleteFictionController } from "../controller/crud/DeleteFictionController";
import { GetFictionController } from "../controller/crud/GetFictionsController";
import { UpdateFictionController } from "../controller/crud/UpdateFictionController";

export const FictionApplication = (app: Elysia) =>
  app
    .use(AddFictionController)
    .use(DeleteFictionController)
    .use(GetFictionController)
    .use(UpdateFictionController);
