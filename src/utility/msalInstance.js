import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: process.env.APP_ID,
        authority: `https://login.microsoftonline.com/common`,
        redirectUri: "http://localhost:3000",
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);


