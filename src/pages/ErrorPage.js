import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/indent_logo_color.svg";
import { Seo } from "../components";
//Simple Error Page
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <Seo title="Error" content="SEO Content" robots="index" href="/error" />
      <section>
        <div className="form-logo">
          <img
            className="logo"
            src={logo}
            title="Static Web Application Logo"
            alt="Static Web Application Logo of A Lion with a Bourbon Bottle in the Left Paw"
          />
        </div>
        <h1>404</h1>
        <h3>Sorry, the page you looking for is busy sipping Bourbon</h3>
        <div className="btn-404">
          <Link to="/" className="btn">
            Home Page
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }

  .btn-404 {
    padding-bottom: 4rem;
  }

  .form-logo {
    margin-top: 3rem;
    padding: 20px;
    display: inline-block;
    width: 100%;
    min-height: 40px;
    min-width: 320px;
    max-width: 400px;
  }
`;

export default ErrorPage;
