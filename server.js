const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./src/schema')
const resolvers = require('./src/resolvers')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.error('Error connecting to MongoDB database', err))

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Express server started on port ${port}`)
})
