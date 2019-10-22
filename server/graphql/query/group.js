import {
  GraphQLID,
  GraphQLList,
} from 'graphql';
import { Group } from '../../model';
import { GroupType } from '../../schema';

export const group = {
  type: GroupType,
  args: { _id: { type: GraphQLID } },
  resolve(parent, args) {
    const { _id } = args;
    return Group.findById({ _id });
  },
};
export const groups = {
  type: new GraphQLList(GroupType),
  resolve() {
    return Group.find({});
  },
};
