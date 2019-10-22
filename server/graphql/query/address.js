import {
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { Address } from '../../model';
import { AddressType } from '../../schema';

export const address = {
  type: AddressType,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Address.findById({ _id });
  },
};
export const addressses = {
  type: new GraphQLList(AddressType),
  resolve() {
    return Address.find({});
  },
};
