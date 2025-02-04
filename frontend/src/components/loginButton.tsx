import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

const LoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ["openid", "profile", "api://1def8333-5f90-4bd2-ba69-294b0a52e80a/user_impersonation"]
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
