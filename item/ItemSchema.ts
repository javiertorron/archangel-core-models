import { Schema } from "mongoose";
const ItemSchema = new Schema({
  name: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});
export default ItemSchema;