import {
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { group } from '../../constant';
import { Group } from '../../model';
import { GroupType } from '../../schema';

export const deleteGroup = {
  type: GraphQLString,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Group.deleteOne({ _id })
      .then(res => (res.deletedCount ? group.delete : group.notFount));
  },
};
export const updateGroup = {
  type: GroupType,
  args: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    contactIds: { type: new GraphQLList(GraphQLID) },
  },
  resolve(parent, args) {
    const { _id } = args;
    return Group.findOneAndUpdate({ _id }, args);
  },
};
export const addGroup = {
  type: GroupType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    contactIds: { type: new GraphQLList(GraphQLID) },
  },
  resolve(parent, args) {
    const {
      name, description, type, contactIds,
    } = args;
    const groupModal = new Group({
      name, description, type, contactIds,
    });
    return groupModal.save();
  },
};
