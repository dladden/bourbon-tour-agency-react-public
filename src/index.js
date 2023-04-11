import React from "react"; //adding React functionality into the file from the node_modules
import ReactDOM from "react-dom/client"; //import from ReactDOM dependency (React 18 must import from /client)
import "./index.css"; //importing the index.css styling
import App from "./App"; //importing the App.js
//Importing all the context
import { ToursProvider } from "./context/tours_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { HelmetProvider } from "react-helmet-async";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
//using npm package to disable dev tools in development
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

//Auth0 info:
//react router dom setting up the root which is then used in the root.render()
const root = ReactDOM.createRoot(document.getElementById("root"));
//This index.js is JavaScript entry point for javas script
//The index.html is the actual connection to the web and ReactDOM is used to insert the App.js into the the root div of the index.html
//render method is looking for what to render and where to render it (</> is needed)
//Application is wrapped into the global context.
//ToursProvider provides data into the Filter, to ensure this FilterProvider is embedded into the TourProvider
//CartProvider is wapping the app, which makes it available in the app
//Auth0 provider is used for the authentication and log as well as user database
//UserProvider wraps the application so that the user_context can be accessible in the whole app
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN} //using Environment Variables
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} //using Environment Variables
    redirectUri={window.location.origin} //redirect
    cacheLocation="localstorage" //storing user key value pair "tokens" in local storage for persistence
  >
    <UserProvider>
      <ToursProvider>
        <FilterProvider>
          <CartProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </CartProvider>
        </FilterProvider>
      </ToursProvider>
    </UserProvider>
  </Auth0Provider>
);
