// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://yoga-server.thankfulbush-f35cdce5.southindia.azurecontainerapps.io/graphql', // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;
