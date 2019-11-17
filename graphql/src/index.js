import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from './schema'

const app = express(),
  port = process.env.PORT || 3000;

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, () =>
  process.stdout.write(`The server listens on port ${port}\n`)
);
