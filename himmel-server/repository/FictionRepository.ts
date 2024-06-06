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

export async function getAllFiction() {
  const allFictions = await Fiction.find();
  if (!allFictions) {
    throw new Error("No fiction found");
  }
  return allFictions;
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

export async function updateFiction(
  fictionId: String,
  userId: String,
  updatedFictionData: Partial<IFiction>,
) {
  const updateFiction = await Fiction.findOneAndUpdate(
    { _id: fictionId, author: userId },
    updatedFictionData,
  );
  if (!updateFiction) {
    throw new Error("Fiction not found or you are not the author.");
  }
  return updateFiction;
}
