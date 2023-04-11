import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const CustomTourLink = () => {
  return (
    <Wrapper>
      <article className="header">
        <h3>
          Custom Form
          <br />
          <Link smooth to="/contact#custom-tour" className="btn">
            Create
          </Link>
        </h3>
        {/* <Route path="/contact" element={<CustomTour />} />
          </Router> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  .header h3 {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .h3 {
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
  .btn {
    margin-top: 0.5rem;
    padding: 0.8rem 0.8rem;
    font-size: 1rem;
  }
`;
export default CustomTourLink;
