import {
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { Contact } from '../../model';
import { ContactType } from '../../schema';

export const contact = {
  type: ContactType,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Contact.findById({ _id });
  },
};
export const contacts = {
  type: new GraphQLList(ContactType),
  resolve() {
    return Contact.find({});
  },
};
