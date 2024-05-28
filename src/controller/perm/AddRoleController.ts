import Elysia, { t } from "elysia";
import { AuthPlugin } from "../../plugin/AuthPlugin";
import { Role } from "../../model/Role";
import * as RoleRepository from "../../repository/RoleRepository";

export const AddRoleController = async (app: Elysia) =>
  app.guard(
    {
      body: t.Object({
        name: t.String(),
        description: t.String(),
        permissions: t.Array(
          t.Object({ resource: t.String(), actions: t.Array(t.String()) }),
        ),
      }),
    },
    (app) =>
      app.use(AuthPlugin).post("/role", async ({ body, decodedToken }) => {
        console.log("body", body);
        const role = new Role({
          name: body.name,
          description: body.description,
          permissions: body.permissions,
        });
        console.log("role", role);
        await RoleRepository.addRole(role);
        return role;
      }),
  );
