const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Log {
    id: ID!
    level: String!
    message: String!
    timestamp: String
  }

  input LogInput {
    level: String!
    message: String!
  }
  
  type Query {
    getLogs: [Log]
    getLogById(id: String!): Log
  }
  
  type Mutation {
    createLog(log:LogInput!): Log
    deleteLogById(id: String!): Log
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  
`);

module.exports = schema