import React from "react";
import { GiBeerBottle } from "react-icons/gi";
import styled from "styled-components";
import { distilleries } from "../utils/constants";
//This component lists the distilleries
const DistilleriesList = () => {
  return (
    <Wrapper>
      <div className="distil">
        <ul className="distil-col">
          {distilleries.map(function (distill, index) {
            return (
              <li key={index}>
                <GiBeerBottle />
                {distill}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //   body {
  //   padding: 2rem;
  // }

  .distil-col {
    display: grid;
    /*
   * auto-fit - create columns only if there's content for them
   * auto-fill - create columns even if they will be empty
   */
    grid-template-columns: repeat(2, minmax(155px, 1fr));
    grid-auto-rows: 1.5rem;
    grid-gap: 0rem;
  }
  @media (min-width: 992px) {
    .distil-col {
      display: grid;
      grid-template-columns: repeat(4, minmax(155px, 1fr));
      grid-auto-rows: 1.5rem;
      grid-gap: 0rem;
    }
  }

  @media screen and (max-width: 479px) {
    .distil-col {
      display: grid;

      grid-template-columns: repeat(2, minmax(150px, 1fr));
      grid-auto-rows: 1rem;
      grid-gap: 0rem;
    }
  }

  .distil {
    padding: 0rem;
  }
`;

export default DistilleriesList;
