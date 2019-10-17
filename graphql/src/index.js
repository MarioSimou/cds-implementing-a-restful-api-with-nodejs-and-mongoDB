import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import mongoose from 'mongoose'

const app = express(),
      port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  const server = new ApolloServer({typeDefs, resolvers})
  server.applyMiddleware({ app, path: '/api' })
  
  app.listen({port}, () => process.stdout.write(`The server listens on port http://localhost:${port}${server.graphqlPath}`))

})

process.on('uncaughtException', e => { process.stdout.write(`Uncaught Exception: ${e.stack}\n`); process.exit(0)})
process.on('unhandledRejection', e => { process.stdout.write(`Unhandled Rejection: ${e.stack}\n`); process.exit(0)})
process.on('SIGTERM', e => { process.stdout.write(`Signal Terminate: ${e.stack}\n`); process.exit(0) } )