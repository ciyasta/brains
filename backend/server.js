import { createSchema } from 'graphql-yoga'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'

export const schema = createSchema({
    typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
    resolvers: {
        Query: {
            hello: () => 'world'
        }
    }
})

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})