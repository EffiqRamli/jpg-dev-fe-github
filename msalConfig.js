import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        cientId: "86e425da-7334-4927-bfe2-f0070c532250", // ClientID
        authority: "https://login.microsoftonline.com/0dceb798-75ec-40df-9ba5-d3447647c91b", //Login URL
        redirectUrl: "http://13.228.138.48", // IP Address for testing
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookies: false,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);