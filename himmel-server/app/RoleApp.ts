import Elysia from "elysia";
import { AddRoleController } from "../controller/perm/AddRoleController";
import { AddUserRoleController } from "../controller/perm/AddUserRoleController";

export const RoleApplication = (app: Elysia) =>
  app.use(AddRoleController).use(AddUserRoleController);
