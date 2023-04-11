import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// Data passed from appPage.js this component displays the stars
const Stars = ({ stars, rev_url, category }) => {
  //Using the array we can dynamically insert numbers which are checked against the data's numbers
  //array .from method with 5 empty objects
  //array .from second argument is callback function
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5; //iterating by 0.5 float
    return (
      //Each child in a list should have a unique "key" prop
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">
        {/* rendering function tempStars */}
        {tempStars}
      </div>
      {/* target="_blank" link in a new tab every time & no referrer information passing */}
      <a href={rev_url} target="_blank" rel="noreferrer">
        <p className="reviews">
          {category === "stay" ? "(Airbnb Reviews)" : "(Facebook Reviews)"}
        </p>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--clr-primary-6);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
