import Elysia, { t } from "elysia";
import { AuthPlugin } from "../../plugin/AuthPlugin";
import { Action, Resource, Role } from "../../model/Role";
import * as RoleRepository from "../../repository/RoleRepository";

export const AddUserRoleController = async (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        roleId: t.String(),
        userId: t.String(),
      }),
    },
    (app) =>
      app.use(AuthPlugin).post("/user-role", async ({ body, decodedToken }) => {
        await RoleRepository.checkPermission(
          decodedToken.userId,
          Resource.USER,
          Action.WRITE,
        );
        return await RoleRepository.addRoleToAUser(body.roleId, body.userId);
      }),
  );
