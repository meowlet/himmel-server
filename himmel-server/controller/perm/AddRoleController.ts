import Elysia, { t } from "elysia";
import { AuthPlugin } from "../../plugin/AuthPlugin";
import { Action, Resource, Role } from "../../model/Role";
import * as RoleRepository from "../../repository/RoleRepository";

export const AddRoleController = async (app: Elysia) =>
  app
    .guard(
      {
        body: t.Object({
          name: t.String(),
          description: t.String(),
          permissions: t.Array(
            t.Object({
              resource: t.Enum(Resource),
              actions: t.Array(t.Enum(Action)),
            }),
          ),
        }),
      },
      (app) =>
        app.use(AuthPlugin).post("/role", async ({ body, decodedToken }) => {
          await RoleRepository.checkPermission(
            decodedToken.userId,
            Resource.ROLE,
            Action.WRITE,
          );
          const role = new Role({
            name: body.name,
            description: body.description,
            permissions: body.permissions,
          });
          await RoleRepository.addRole(role);
          return role;
        }),
    )
    .get("/role", async () => {
      return await RoleRepository.getAllRole();
    });
