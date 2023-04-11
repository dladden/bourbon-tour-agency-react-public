import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
//Component responsible for displaying plus and minus button for the tour guests
const AmountButtons = ({ increase, decrease, guest }) => {
  //outside styling added into the styled components wrapper 'amount-btns'
  return (
    <Wrapper className="amount-btns">
      {/* decrease passed as a reference to AddToCart */}
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="guests">{guest}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
      <div className="guest-selector"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  guest-selector {
    width: 5rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // .amount-btn {
  //   color: red;
  // }
`;

export default AmountButtons;
