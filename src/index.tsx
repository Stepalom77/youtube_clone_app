import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-0zyvabu1.us.auth0.com'
    clientId='JUM8sDJZsCAfwdvT7A8ndV0jh1yLsYIT'
    redirectUri={window.location.origin}
    audience="http://localhost:7000/"
    scope='openid profile email'
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

