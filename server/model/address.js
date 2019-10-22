import mongoose, { Schema } from 'mongoose';
import timestamp from 'mongoose-timestamp2';

const AddressSchema = new Schema({
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String,
  phone: String,
  fax: String,
  mobile: String,
  email: String,
});

AddressSchema.plugin(timestamp);
export const Address = mongoose.model('Address', AddressSchema);
