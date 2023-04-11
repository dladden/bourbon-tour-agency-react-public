import React, { useState } from "react";
import styled from "styled-components";
import privacy_data from "../utils/privacy_data"; //default export always resolves to default name
import { Seo, Privacy } from "../components";
import logo from "../assets/checkout_list_border.svg";
import {
  email_privacy,
  access_privacy,
  credit_privacy,
  newsletter_privacy,
  notification_privacy,
  stripe_privacy,
  auth0_privacy,
  data_privacy,
} from "../utils/privacy";

//Simple Information Page with Q&A/FAQ style
const PrivacyPage = () => {
  const [questions] = useState(privacy_data);
  return (
    <Wrapper>
      <main>
        <Seo
          title="Privacy"
          content="SEO Content"
          robots="index"
          href="/privacy"
        />
        <section id="privacy-section">
          <div className="container">
            <h1>
              Our Privacy Policy:
              <br />
              <div className="integrated-logo-center">
                <img
                  src={logo}
                  title="Integrated with Stripe, Auth0 and Okta"
                  alt="Logo with integrated services for this site like Stripe and Auth0"
                  className="integrated-logo"
                />
              </div>
            </h1>
            <h3>{email_privacy.title}</h3>
            <p>{email_privacy.body}</p>
            <p>
              <em>{email_privacy.alt}</em>
            </p>
            <h3>Visit These Questions for Quick Information:</h3>
            <div className="info">
              {/* This map method passes the data from privacy_data to the Question component */}
              {questions.map((question) => {
                return <Privacy key={question.id} {...question} />;
              })}
            </div>
            {/* ACCESS PRIVACY */}
            <h3>{access_privacy.title}</h3>
            <p>{access_privacy.body}</p>
            <p>
              <em>{access_privacy.alt}</em>
            </p>
            {/* SECURITY PRIVACY */}
            <h3>{credit_privacy.title}</h3>
            <p>{credit_privacy.body}</p>
            {/* DATA PRIVACY */}
            <h3>{data_privacy.title}</h3>
            <p>{data_privacy.body}</p>
            <p>
              <em>{data_privacy.alt}</em>
            </p>
            <p>
              <a href={stripe_privacy} target="_blank" without rel="noreferrer">
                Stripe Privacy Center
              </a>
            </p>
            <p>
              <a href={auth0_privacy} target="_blank" without rel="noreferrer">
                Auth0 Data Privacy and Compliance
              </a>
            </p>
            {/* NEWSLETTER PRIVACY */}
            <h3>{newsletter_privacy.title}</h3>
            <p>{newsletter_privacy.body}</p>
            <p>
              <em>{newsletter_privacy.alt}</em>
            </p>
            {/* NOTIFICATION PRIVACY */}
            <h3>{notification_privacy.title}</h3>
            <p>{notification_privacy.body}</p>
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

  a {
    color: var(--clr-primary-4);
  }
  a:link {
    text-decoration: underline;
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
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 2rem;
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

  .integrated-logo {
    max-width: 100%;
    height: 50px;
    width: 300px;
  }
  .integrated-logo-center {
    display: flex;
    justify-content: center; /* horizontally center */
    align-items: center;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    
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
    min-height: 10vh;
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
    max-width: 1000px;
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  @media screen and (min-width: 992px) {
    .container {
      
    }
  }
`;

export default PrivacyPage;
