import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import mongoose from "mongoose";

const app = express(),
  port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/db", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(db => {
    const apolloServer = new ApolloServer({ schema });
    apolloServer.applyMiddleware({ app, path: "/graphql" });

    app.listen({ port }, () =>
      process.stdout.write(`The server listens on port ${port}\n`)
    );
  })
  .catch(e => console.log(e));

mongoose.connection.on("connected", () =>
  process.stdout.write("Successful connection to db\n")
);
mongoose.connection.on("error", e =>
  process.stdout.write(`Error encountered on ${e}.`)
);
