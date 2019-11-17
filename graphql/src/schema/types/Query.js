import { GraphQLObjectType, GraphQLList, GraphQLNonNull} from 'graphql'
import {ResponseUser, ResponseUsers} from './Response'
import {getUser,getUsers} from '../../resolvers/Query'
import {Response} from './union'

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
        }
    }
})