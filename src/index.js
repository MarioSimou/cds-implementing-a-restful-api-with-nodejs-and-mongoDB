import express from 'express'
import controllers from './controllers'
import mongoConnection from './utils/mongoConnection'
import errorHandling from './utils/errorHandling'

const app = express(),
      port = process.env.PORT || 3000;

// middlewares
// -- x-www-form-urlencoded parser
// app.use(express.urlencoded({ extended: true }))
// -- application/json
app.use(express.json())

// Listening Routes
app.use('/api',  controllers )
app.use( errorHandling )


mongoConnection.init({ uri: process.env.MONGO_URI}, db => {
  // initiates the server
  app.listen(port , () => process.stdout.write(`The app listens on port http://localhost:${port}\n`))
})