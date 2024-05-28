import Elysia from "elysia";
import { AddRoleController } from "../controller/perm/AddRoleController";

export const RoleApplication = (app: Elysia) => app.use(AddRoleController);
