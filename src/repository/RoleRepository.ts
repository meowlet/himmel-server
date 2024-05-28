import { IRole } from "../model/Interface";
import { Role } from "../model/Role";

export async function addRole(role: IRole) {
  return await Role.create(role);
}
