import React from "react";
import styled from "styled-components";
import logo from "../assets/newsletter_frontpage.svg";

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Join Static Web Application Newsletter and receive <em>10% off</em>
        </h3>
        <img
          className="newsletter"
          src={logo}
          title="Static Web Application Newsletter"
          alt="Our News Letter glass of Bourbon paired with cigar"
        />
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div action="" className="contact-form">
            <a
              href="https://cdn.forms-content.sg-form.com/7fb68344-a742-11ed-ab44-4289808bb666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">JOIN NOW</button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    padding-bottom: 0.5rem;
    text-transform: none;
  }

  a {
    font-weight: 900;
    margin: auto;
    padding: 0;
    line-height: 2;
  }

  p {
    font-size: 1.2rem;
    font-weight: 900;
    margin: auto;
    padding: 0;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .newsletter {
  }
  .contact-form {
    padding-top: 1rem;
    width: 90vw;
    max-width: 450px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .submit-btn {
    font-size: 0.55rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid var(--clr-black);
  }
  .submit-btn {
    border-top-right-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
    border-top-left-radius: var(--input-radius);
    border-bottom-left-radius: var(--input-radius);
  }
  .submit-btn {
    background: var(--clr-primary-8);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 6rem;
      margin-top: 1rem;
    }
    p {
      margin-bottom: 0;
    }

    .submit-btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 480px) {
    .submit-btn {
      font-size: 0.8rem;
      align-items: center;
      padding: 0.5rem 1rem;
    }
  }
  @media (min-width: 1280px) {
    padding: 4rem 0;
    align-items: center;
  }
`;

export default NewsLetter;
