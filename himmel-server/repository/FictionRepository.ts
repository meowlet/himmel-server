import { Fiction } from "../model/Fiction";
import { IFiction } from "../model/Interface";

export async function addFiction(fiction: IFiction): Promise<void> {
  await Fiction.create(fiction);
}

export async function deleteFiction(
  fictionId: String,
  userId: String,
): Promise<void> {
  const deleteFiction = await Fiction.findOneAndDelete({
    _id: fictionId,
    author: userId,
  });

  if (!deleteFiction) {
    throw new Error("Fiction not found or you are not the author.");
  }
}

export async function brutalDeleteFiction(fictionId: String): Promise<void> {
  const deleteFiction = await Fiction.findByIdAndDelete(fictionId);
  if (!deleteFiction) {
    throw new Error("Fiction not found.");
  }
}

export async function getFictionById(fictionId: String) {
  const fiction = await Fiction.findById(fictionId).populate("author");
  console.log(fiction);
  if (!fiction) {
    throw new Error("Fiction not found.");
  }
  return fiction;
}
