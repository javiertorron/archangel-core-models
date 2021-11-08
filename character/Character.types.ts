import { Document, Model } from "mongoose";
export interface ICharacter {
  name: string;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}
export interface ICharacterDocument extends ICharacter, Document {}
export interface ICharacterModel extends Model<ICharacterDocument> {}