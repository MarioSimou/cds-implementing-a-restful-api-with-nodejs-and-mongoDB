import {GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql'
import {Responsable} from './interfaces'
import User from './User'

export const ResponseUser = new GraphQLObjectType({
    name: 'ResponseUser',
    interfaces: [Responsable],
    fields: {
        status: {
            type: GraphQLInt,
        },
        success: {
            type: GraphQLBoolean
        },
        message: {
            type: GraphQLString,
        },
        user: {
            type: User,
        }
    }
})

export const ResponseUsers = new GraphQLObjectType({
    name: 'ResponseUsers',
    interfaces: [Responsable],
    fields: {
        status: {
            type: GraphQLInt,
        },
        success: {
            type: GraphQLBoolean
        },
        message: {
            type: GraphQLString,
        },
        users: {
            type: GraphQLNonNull(GraphQLList(User)),
        }
    }
})