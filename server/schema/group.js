import {
  GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID,
} from 'graphql';
import { ContactType } from './contact';
import { Contact } from '../model';

export const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    contacts: {
      type: new GraphQLList(ContactType),
      resolve(group) {
        const { _id } = group;
        return Contact.find({ groupId: { $in: _id } });
      },
    },
  }),
});
