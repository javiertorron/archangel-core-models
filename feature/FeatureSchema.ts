import { Schema } from "mongoose";
const FeatureSchema = new Schema({
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
export default FeatureSchema;