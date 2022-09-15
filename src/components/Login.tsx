import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-1 md:gap-6 max-w-6xl">
            <h1>Auth0 Login</h1>
            <ul className="grid md:grid-cols-1 md:gap-6 max-w-6xl">
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginWithPopup}>Login with Popup</button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginWithRedirect}>Login with Redirect</button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout as any}>Logout</button>
                </li>
            </ul>
            <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
            {isAuthenticated && (
                <pre className="text-center">{JSON.stringify(user, null, 2)}</pre>
            )}
        </div>
    )
}

export default Login