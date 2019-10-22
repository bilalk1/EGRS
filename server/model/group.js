import mongoose, { Schema } from 'mongoose';
import timestamp from 'mongoose-timestamp2';

const GroupSchema = new Schema({
  name: String,
  description: String,
  type: String,
  contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact', requied: false }],
});

GroupSchema.plugin(timestamp);
export const Group = mongoose.model('Group', GroupSchema);
