import React from "react";
import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useToursContext } from "../context/tours_context";
//CartContext used to display number of items in the cart
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
//CartButtons is used for the cart button and it is display blocked in Navbar through class: cart-btn-wrapper before 960px
//It is also used to display the "Sign in" button which uses conditional rendering to display "Sign out" once user is
//stored in tourUser when user object is out of tourUser the rendering returns to default
const CartButtons = () => {
  const { closeSidebar } = useToursContext();
  const { total_tours, clearCart } = useCartContext();
  const { loginWithRedirect, logout, tourUser } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <FaCartArrowDown /> Cart
          {total_tours > 0 ? (
            <span className="cart-value">{total_tours}</span>
          ) : null}
        </span>
      </Link>
      {/* Conditional: LOGIN BUTTON / LOGOUT BUTTON (note: logout set up as a object with Auth0 properties)*/}
      {tourUser ? (
        <button
          type="button"
          className="auth-btn sign-out"
          onClick={() => {
            clearCart();
            logout({
              returnTo: window.location.origin,
            }); //Auth0 specific command to return back to home after logout
          }}
        >
          <img
            src={tourUser?.picture}
            title="Profile Avatar"
            alt="Profile Avatar"
          />
          Sign out
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <FaUserAlt />
          Sign in
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-right: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -15px;
    background: var(--clr-green-dark);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    // letter-spacing: var(--spacing);
    svg {
      margin-right: 4px;
    }
  }
  .sign-out {
    img {
      margin-right: 5px;
      height: 26px;
      border-radius: 50%;
      color: var(--clr-green-dark);
    }
  }
`;
export default CartButtons;
