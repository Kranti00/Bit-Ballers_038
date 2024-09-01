import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./components/HomePage/auth_config.json";
import { BrowserRouter } from "react-router-dom";
const domain = config.domain;
const clientId = config.clientId;
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xaaa2763pm2y3kva.au.auth0.com"
    clientId="kDjCBTuTRhnTxxXnB7MzBh23Kgie7pWp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
