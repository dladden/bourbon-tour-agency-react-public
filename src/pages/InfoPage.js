import React, { useState } from "react";
import styled from "styled-components";
import info_data from "../utils/info_data"; //default export always resolves to default name
import { Seo, Question, Cancelation } from "../components";
import logo from "../assets/indent_logo.svg";

//Simple Information Page with Q&A/FAQ style
const InfoPage = () => {
  const [questions] = useState(info_data);
  return (
    <Wrapper>
      <main>
        <Seo
          title="FAQ"
          content="Whiskey or Bourbon? What is bourbon? Our FAQ helps with any question relating to bourbon and our bourbon tours."
          robots="index"
          href="/faq"
        />
        <section id="questions">
          <div className="container">
            <h1>
              Static Web Application FAQ:
              <br />
              <div className="sbt-logo-center">
                <img
                  src={logo}
                  title="Static Web Application Logo"
                  alt="Static Web Application Logo of A Lion and a Bottle of Bourbon in the Left Paw"
                  className="sbt-logo"
                />
              </div>
            </h1>

            <div className="info">
              {/* This map method passes the data from info_data to the Question component */}
              {questions.map((question) => {
                return <Question key={question.id} {...question} />;
              })}

              <Cancelation />
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--clr-background-main);
  *,

  padding: 20px;

  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-7);
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    // font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 2rem;
      color: var(--clr-primary-7);
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */

  /* section */

  .sbt-logo {
    max-width: 100%;
    height: 140px;
    width: 140px;
  }
  .sbt-logo-center {
    padding-top: 0.5rem;
    display: flex;
    justify-content: center; /* horizontally center */
    align-items: center;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 110vw;
    }
    .sbt-logo {
      height: 140px;
      width: 140px;
    }
  }

  /*
=============== 
Questions
===============
*/

  main {
    min-height: 100vh;
    /* using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 90vw;
    margin-top: 5rem;
    background: var(--clr-white);
    border-radius: var(--content-radius);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  @media screen and (min-width: 992px) {
    .container {
      width: 140rem;
      display: grid;
      grid-template-columns: 150px 1fr;
    }
  }
`;

export default InfoPage;
