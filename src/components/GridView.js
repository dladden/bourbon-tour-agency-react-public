import React from "react";
import styled from "styled-components";
import Tour from "./Tour";
//GridView displays the styled view with passed tours data from TourList.js
const GridView = ({ tours }) => {
  return (
    <Wrapper>
      <div className="tours-container">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  footer h5 {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 15px;
  }
  footer p {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 12px;
  }

  .tour-grid {
  }

  .tours-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .tours-container {
      grid-template-columns: repeat(2, 1fr);
    }
    footer h5 {
      margin-bottom: 0;
      font-weight: 500;
      font-size: 15px;
    }
    footer p {
      margin-bottom: 0;
      font-weight: 500;
      font-size: 15px;
    }
  }
  @media (min-width: 1170px) {
    .tours-container {
      grid-template-columns: repeat(3, 1fr);
    }
    footer h5 {
      margin-bottom: 0;
      font-weight: 500;
      font-size: 11px;
    }
    footer p {
      margin-bottom: 0;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export default GridView;
