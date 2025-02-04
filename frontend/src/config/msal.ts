import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "bee9a708-d78b-4cc5-a5b0-86bb64446e4d", // Entra ID App ID for React
        authority: "https://login.microsoftonline.com/1958953c-c8e8-4b91-986b-718a64ae3b81",
        redirectUri: "https://green-beach-0dbcca000.4.azurestaticapps.net/",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
