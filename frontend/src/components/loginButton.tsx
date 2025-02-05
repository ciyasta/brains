import { useMsal } from "@azure/msal-react";

function LoginButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ["openid", "profile"]
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
