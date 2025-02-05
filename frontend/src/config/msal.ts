import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "1def8333-5f90-4bd2-ba69-294b0a52e80a", // Entra ID App ID for React
        authority: "https://login.microsoftonline.com/1958953c-c8e8-4b91-986b-718a64ae3b81",
        redirectUri: "https://green-beach-0dbcca000.4.azurestaticapps.net/",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
