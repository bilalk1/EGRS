import {
  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID,
} from 'graphql';
import { AddressType } from './address';
import { GroupType } from './group';
import { Address, Group } from '../model';

export const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dob: { type: GraphQLString },
    nick: { type: GraphQLString },
    note: { type: GraphQLString },
    gender: { type: GraphQLString },
    address: {
      type: AddressType,
      resolve(contact) {
        const { addressId } = contact;
        return Address.findById({ _id: addressId });
      },
    },
    groups: {
      type: GroupType,
      resolve(contact) {
        const { groupId } = contact;
        return Group.find({ _id: { $in: groupId } });
      },
    },
    status: { type: GraphQLBoolean },
  }),
});
