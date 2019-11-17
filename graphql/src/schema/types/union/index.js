import {GraphQLUnionType} from 'graphql'
import {ResponseUser, ResponseUsers} from '../Response'

export const Response = new GraphQLUnionType({
    name: 'Response',
    types: [ResponseUser, ResponseUsers]
}) 