import React from "react";
import styled from "styled-components";
import logo from "../assets/cart_logo.svg";
const CartLogo = () => {
  return (
    <Wrapper>
      <div className="cart-logo-container">
        <img
          className="cart-logo"
          src={logo}
          title="Kentucky Cart Logo"
          alt="State of Kentucky"
          style={{ width: 350 }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //background: var(--clr-background-main);

  .cart-logo-container {
  }
  .cart-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 480px) {
    .cart-logo {
      width: 100%;
    }
  }
`;

export default CartLogo;
