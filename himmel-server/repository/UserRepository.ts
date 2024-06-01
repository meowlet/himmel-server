import { IUser } from "../model/Interface";
import User from "../model/User";
import bcrypt from "bcrypt";

export async function signUp(user: IUser): Promise<void> {
  await User.create(user);
}

export async function signIn(identifier: string, password: string) {
  const existingUser = await User.findOne({
    $or: [{ userName: identifier }, { email: identifier }],
  });

  console.log(existingUser);

  if (!existingUser) {
    throw new Error(`User not found!`);
  }

  const passwordMatched = bcrypt.compareSync(password, existingUser.password);

  if (passwordMatched) {
    return existingUser;
  } else {
    throw new Error("Password does not match!");
  }
}
