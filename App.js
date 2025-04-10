import React from "react";
import {msalProvider, useMsal} from "@azure/msal-react";
import { msalInstance } from "./msalConfig";

function LoginButton() {
    const {instance} = useMsal();

    const handleLogin = () => {
        instance.loginPopup()
            .then(response => console.log("Login Success:", response))
            .catch(error => console.error("Login Failed", error));

    };

    return <button onClick={handleLogin}>Login with Microsoft</button>;

}

function MainApp() {
    return (
        <div className="App">
            <header className="App-Header">
                <h1>React with Microsoft SSO</h1>
                <LoginButton />


            </header>

        </div>
    )
}


function App() {
    return (
        <msalProvider instacne={msalInstance}>
            <MainApp />
        </msalProvider>
    );
}