// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://yoga-server.thankfulbush-f35cdce5.southindia.azurecontainerapps.io/graphql",
});

const authLink = setContext((_, { headers }) => {
    // Retrieve the token from localStorage, sessionStorage, or a state management store
    const token = localStorage.getItem("access_token");

    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
