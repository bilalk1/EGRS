import {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import { contact } from '../../constant';
import { Contact } from '../../model';
import { ContactType } from '../../schema';

export const deleteContact = {
  type: GraphQLString,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Contact.deleteOne({ _id })
      .then(res => (res.deletedCount ? contact.delete : contact.notFount));
  },
};
export const updateContact = {
  type: ContactType,
  args: {
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dob: { type: GraphQLString },
    nick: { type: GraphQLString },
    note: { type: GraphQLString },
    gender: { type: GraphQLString },
    address: { type: GraphQLID },
    groupIds: { type: new GraphQLList(GraphQLID) },
    status: { type: GraphQLBoolean },
  },
  resolve(parent, args) {
    const { _id } = args;
    return Contact.findOneAndUpdate({ _id }, args);
  },
};
export const addContact = {
  type: ContactType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dob: { type: GraphQLString },
    nick: { type: GraphQLString },
    note: { type: GraphQLString },
    gender: { type: GraphQLString },
    address: { type: GraphQLID },
    groupIds: { type: new GraphQLList(GraphQLID) },
    status: { type: GraphQLBoolean },
  },
  resolve(parent, args) {
    const contactModal = new Contact(args);
    return contactModal.save();
  },
};
