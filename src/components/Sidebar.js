import React from "react";
import logo1 from "../assets/logo1.svg";
import { Link } from "react-router-dom";
import { useToursContext } from "../context/tours_context"; //importing the context
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
//Sidebar is used to display the side menu when the display is set to be below 1080px (992px) functionality for phones or tablets
//It will display the same pages links and it includes functionality for ONLY logged-in user where checkout will be displayed
//Using template literals
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useToursContext();
  const { tourUser } = useUserContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img
            src={logo1}
            className="logo"
            title="Static Web Application Logo"
            alt="Static Web Application Logo of A Lion and a Bottle of Bourbon in the Left Paw"
          />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {tourUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                CHECKOUT
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.3rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 0rem;
    padding-left: 2rem;
    background: var(--clr-primary-10);
    color: var(--clr-grey-2);
  }
  // this will hide the sidebar until show-sidebar is called
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 1080px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
