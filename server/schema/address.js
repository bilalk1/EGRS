import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
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
  }),
});
