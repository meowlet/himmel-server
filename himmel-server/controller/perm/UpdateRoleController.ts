import Elysia, { t } from "elysia";
import { Resource, Action } from "../../model/Role";
import { AuthPlugin } from "../../plugin/AuthPlugin";
import * as RoleRepository from "../../repository/RoleRepository";
import { IRole } from "../../model/Interface";

export const UpdateRoleController = async (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        roleId: t.String(),
        updatedRoleData: t.Object({
          name: t.Optional(t.String()),
          permissions: t.Array(
            t.Object({
              resource: t.String(),
              actions: t.Array(t.String()),
            }),
          ),
        }),
      }),
    },
    (app) =>
      app.use(AuthPlugin).patch("/role", async ({ body, decodedToken }) => {
        await RoleRepository.checkPermission(
          decodedToken.userId,
          Resource.ROLE,
          Action.WRITE,
        );
        return await RoleRepository.updateRole(
          body.roleId,
          body.updatedRoleData as Partial<IRole>,
        );
      }),
  );
