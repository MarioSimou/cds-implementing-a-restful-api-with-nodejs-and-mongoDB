import {GraphQLObjectType, GraphQLNonNull} from 'graphql'
import {Response} from './union'
import mutation from '../../resolvers/Mutation'

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: GraphQLNonNull(Response),
            resolve: mutation.createUser,
        },
        updateUser: {
            type: GraphQLNonNull(Response),
            resolve: mutation.updateUser,
        },
        deleteUser: {
            type: GraphQLNonNull(Response),
            resolve: mutation.deleteUser,
        },
    }
})