import mongoose, { Schema } from 'mongoose';
import timestamp from 'mongoose-timestamp2';

const ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: String,
  nick: String,
  note: String,
  gender: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address', required: false },
  groups: [{ type: Schema.Types.ObjectId, ref: 'Group', required: false }],
  status: Boolean,
});

ContactSchema.plugin(timestamp);
export const Contact = mongoose.model('Contact', ContactSchema);
