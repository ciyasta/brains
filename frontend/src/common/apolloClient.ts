// apolloClient.js
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMsal } from '@azure/msal-react';

const httpLink = createHttpLink({
    uri: 'https://yoga-server.thankfulbush-f35cdce5.southindia.azurecontainerapps.io/graphql',
});

const authLink = setContext(async (_, { headers }) => {
    const { instance, accounts } = useMsal();
    await instance.initialize();
    const tokenResponse = await instance.acquireTokenSilent({
        scopes: ["api://1def8333-5f90-4bd2-ba69-294b0a52e80a/user_impersonation"],
        account: accounts[0]
    });
    console.log(tokenResponse);
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${tokenResponse.accessToken}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
