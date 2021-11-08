import CharacterSchema from "./character/CharacterSchema";
import FeatureSchema from "./feature/FeatureSchema";
import ItemSchema from "./item/ItemSchema";

declare module "@unrealcreations/models" {
    export type CharacterModel = typeof CharacterSchema
    export type FeatureModel = typeof FeatureSchema
    export type ItemModel = typeof ItemSchema
}   