import { IRole } from "../model/Interface";
import { Action, Resource, Role } from "../model/Role";
import User from "../model/User";

export async function addRole(role: IRole) {
  console.log(role)
  return await Role.create(role);
}

export async function addRoleToAUser(roleId: string, userId: string) {
  const existingRole = await Role.exists({ _id: roleId });
  if (!existingRole) {
    throw new Error("The role does not exist");
  }
  return await User.findOneAndUpdate(
    { _id: userId },
    { $addToSet: { roles: roleId } },
  );
}

export async function getAllRole() {
  return Role.find()
}

export async function checkPermission(
  userId: string,
  resource: Resource,
  action: Action,
) {
  const user = await User.findOne({ _id: userId }).populate<{ roles: IRole[] }>(
    "roles",
  );

  if (!user) {
    throw new Error("User not found");
  }

  for (const role of user.roles) {
    const permission = role.permissions.find(
      (p) => p.resource === resource && p.actions.includes(action),
    );
    if (permission) return;
  }

  throw new Error("Permission denied");
}

export async function updateRole(
  roleId: string,
  updatedRoleData: Partial<IRole>,
) {
  const updatedRole = await Role.findByIdAndUpdate(roleId, updatedRoleData);
  if (!updatedRole) {
    throw new Error("Role not found");
  }
  return updatedRole;
}
