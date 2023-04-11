import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

//Question component receives passed values from PageInfo and structures
//PageInfo uses map to map through the structure
const Question = ({ question_title, info }) => {
  //useState for the click to show the info (initialized to be false)
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
      <article className="question">
        <header>
          {/* onClick button sets the opposite of the current info state */}
          <div
            className="info-btn"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            <div>
              <h4>{question_title}</h4>
            </div>

            <div className="icon">{showInfo ? <FaMinus /> : <FaPlus />}</div>
          </div>
        </header>
        {/* if showInfo is true show the info*/}
        {showInfo && <p>{info}</p>}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .info-btn {
    background: transparent;
    border-color: transparent;
    background: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--clr-primary-4);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
  }

  .question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-special);
    margin-bottom: 1rem;
    border-radius: var(--images-radius);
    box-shadow: var(--light-shadow);
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .icon {
    margin-left: auto;
  }
`;

export default Question;
