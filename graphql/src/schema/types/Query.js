import { GraphQLObjectType, GraphQLNonNull,GraphQLString, GraphQLID, GraphQLInputObjectType} from 'graphql'
import {getUser,getUsers} from '../../resolvers/Query'
import {Response} from './union'
import {queryUserInput} from './input'

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        getUsers: {
            type: GraphQLNonNull(Response),
            resolve: getUsers,
        },
        getUser: {
            type: GraphQLNonNull(Response),
            resolve: getUser,
            args: {
                query: {type: GraphQLNonNull(queryUserInput)},
            }
        }
    }
})