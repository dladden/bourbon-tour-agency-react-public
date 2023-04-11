import React from "react";
import styled from "styled-components";

//Component responsible for transportation type and count of guests
const LinkButton = ({ tour }) => {
  const { tour_url } = tour;

  return (
    <Wrapper>
      <div className="trans">
        <span></span>

        <a className="btn" href={tour_url} target="_blank" rel="noreferrer">
          More Info
        </a>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  margin-top: 2rem;
  .trans {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .trans-btn {
    display: inline-block;
    margin-right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  @media (min-width: 992px) {
    .trans-btn {
      margin-left: 3rem;
      grid-template-columns: 20fr 20fr;
      grid-column-gap: 20px;
      align-items: center;
    }
  }

  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 126.5px;
  }
`;
export default LinkButton;
