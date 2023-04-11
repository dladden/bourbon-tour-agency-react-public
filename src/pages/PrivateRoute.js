import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//Above: importing useAuth Hook getting the user from the Auth0 just like from the context

//Private Rout wraps the Checkout page this is done for private checkout and to prevent
//user form accessing this page through the path

//TODO: see if user exists if yes: return the children - the wrapped component in this
//case Checkout Page ("/checkout") if not: redirect the user to a login page

//passing children and rest operator which passes the rest of the parameters from the wrap
//Rest Operator vs Spread Operator: rest takes the rest of items, spread spreads items
const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    //if there is no user navigate to the home page
    return <Navigate to="/" />;
  }
  return children;
  //rest of the children params :{} path:"/checkout" url:"/checkout" etc..
  //returning the Route component from this code & spreading the "...rest" of the items
  //using render function, if user exists pass the children if not return redirect home "/"
};
export default PrivateRoute;
