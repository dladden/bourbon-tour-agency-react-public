import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Loading } from "../components";

//This Component will wrap all the routs. The whole app will be rapped in the App.js
//This Component will all check if user is loading and will display loading and if
//error it will show that there was an error
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  //if is loading
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading..</h1>
        <Loading />
      </Wrapper>
    );
  } //END isLoading
  //if error
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  } //END error

  //if no error or no loading return the children in react fragment "<></>""
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
