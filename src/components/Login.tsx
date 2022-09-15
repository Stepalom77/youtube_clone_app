import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
    return(
        <div>
            <h1>Auth0 Login</h1>
            <ul>
                <li>
                    <button onClick={loginWithPopup}>Login with Popup</button>
                </li>
                <li>
                    <button onClick={loginWithRedirect}>Login with Redirect</button>
                </li>
                <li>
                    <button onClick={logout as any}>Logout</button>
                </li>
            </ul>
            <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
            {isAuthenticated && (
                <pre style={{textAlign: 'start'}}>{JSON.stringify(user, null, 2)}</pre>
            )}
        </div>
    )
}

export default Login