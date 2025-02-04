import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client';
import client from './common/apolloClient';
import { msalInstance } from './config/msal';
import { MsalProvider } from '@azure/msal-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      {/* <MsalProvider instance={msalInstance}> */}
      <App />
      {/* </MsalProvider> */}
    </ApolloProvider>
  </StrictMode>,
)
