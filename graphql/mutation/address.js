import {
  GraphQLID,
  GraphQLString,
} from 'graphql';
import { address } from '../../constant';
import { Address } from '../../model';
import { AddressType } from '../../schema';

export const deleteAddress = {
  type: GraphQLString,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Address.deleteOne({ _id })
      .then(res => (res.deletedCount ? address.delete : address.notFount));
  },
};
export const updateAddress = {
  type: AddressType,
  args: {
    _id: { type: GraphQLID },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    phone: { type: GraphQLString },
    fax: { type: GraphQLString },
    mobile: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    const { _id } = args;
    return Address.findOneAndUpdate({ _id }, args);
  },
};
export const addAddress = {
  type: AddressType,
  args: {
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    phone: { type: GraphQLString },
    fax: { type: GraphQLString },
    mobile: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    const addressModal = new Address(args);
    return addressModal.save();
  },
};
