import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';
import { useMsal } from '@azure/msal-react';
import LoginButton from './components/loginButton.tsx';

const GET_DATA = gql`
  query{
  hello
}
`;

function App() {
  const [count, setCount] = useState(0)
  const { instance, accounts } = useMsal();
  console.log(accounts)
  const { loading, error, data } = useQuery(GET_DATA);

  const fetchToken = async () => {
    const tokenResponse = await instance.acquireTokenSilent({
      scopes: ["api://1def8333-5f90-4bd2-ba69-294b0a52e80a/user_impersonation"]
    });
    console.log(tokenResponse)
  }

  useEffect(() => {
    fetchToken()
  }, [])

  if (accounts.length === 0) {
    return <LoginButton />
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + {data.hello}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
