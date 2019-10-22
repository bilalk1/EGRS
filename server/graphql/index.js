import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import {
  contacts, group, contact, groups, address, addressses,
} from './query';
import {
  addGroup,
  updateGroup,
  deleteGroup,
  addContact,
  deleteContact,
  updateContact,
  addAddress,
  deleteAddress,
  updateAddress,
} from './mutation';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    contacts, contact, group, groups, address, addressses,
  },
});
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGroup,
    updateGroup,
    deleteGroup,
    addContact,
    deleteContact,
    updateContact,
    addAddress,
    deleteAddress,
    updateAddress,
  },
});
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
