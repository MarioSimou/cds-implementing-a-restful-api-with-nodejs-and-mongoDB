import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const app = express(),
      port = process.env.PORT || 3000

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app, path: '/api' })

app.listen({port}, () => process.stdout.write(`The server listens on port http://localhost:${port}${server.graphqlPath}`))