import React from "react";
import styled from "styled-components";
import logo1 from "../assets/logo1.svg"; //large main logo on the page
import logo2 from "../assets/logo2.svg"; //logo which appears in the sidebar
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useToursContext } from "../context/tours_context";
import { useUserContext } from "../context/user_context";
//The Navbar.js is responsible fo rendering the links to the pages as well as log-in and cart buttons
//It calls on constants which house an array for all the links and the designated urls
const MyComponent = () => {
  // The current width of the viewport
  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 820;
  /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
  return width < breakpoint ? (
    <img
      src={logo2}
      title="Static Web Application Logo"
      alt="Static Web Application Logo of A Lion and a Bottle of Bourbon in the Left Paw"
    />
  ) : (
    <img
      src={logo1}
      title="Static Web Application Logo"
      alt="Static Web Application Logo of A Lion and a Bottle of Bourbon in the Left Paw"
    />
  );
};
const Nav = () => {
  const { openSidebar } = useToursContext();
  const { tourUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">{MyComponent()}</Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {tourUser && (
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 300px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    color: var(--clr-primary-6);
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    margin: 0px;
    display: none;
  }
  //NAVBAR Brake point
  @media (min-width: 1080px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
