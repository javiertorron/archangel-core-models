import { ICharacterDocument, ICharacterModel } from "./character.types";
export async function findOneOrCreate(
  this: ICharacterModel,
  userId: string
): Promise<ICharacterDocument> {
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    return this.create({ userId });
  }
}
export async function findByAge(
  this: ICharacterModel,
  min?: number,
  max?: number
): Promise<ICharacterDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}