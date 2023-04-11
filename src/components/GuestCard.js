import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers";
import { useCartContext } from "../context/cart_context"; //cart context
import { useUserContext } from "../context/user_context"; //user context
import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
//Component responsible for the OwnerCard used in Contact page
const GuestCard = () => {
  const { total_amount, tax } = useCartContext();
  const { tourUser } = useUserContext();
  const total_tax = total_amount * (tax / 100);

  return (
    <Wrapper>
      <div className="card">
        <div className="img">
          <img
            src={tourUser?.picture}
            title="Profile Avatar"
            alt="Profile Avatar"
          />
        </div>
        <div className="infos">
          <div className="name">
            <h2>Hello, {tourUser && tourUser.name}</h2>
          </div>
          <h4 className="text">
            Your Total: {priceFormat(total_amount + total_tax)}
          </h4>
          <div className="">
            <Link className="btn" smooth to="/cart#user-cart">
              <FaShoppingCart />
              &nbsp; View Cart
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    display: block;
  }
  /* Utilities */
  .card::after,
  .card img {
    border-radius: 50%;
  }
  body,
  .card,
  .stats {
    display: flex;
  }
  .btn {
    background: var(--clr-primary-9);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    background-color: var(--clr-white);
    max-width: 460px;
    align-items: center;
  }
  .card::before,
  .card::after {
    content: "";
    position: absolute;
    z-index: -1;
  }
  .card::before {
  }

  .card img {
    width: 6rem;
    min-width: 80px;
  }

  .infos {
    margin-left: 1.5rem;
  }

  .name {
    margin-bottom: 0.5rem;
  }
  .name h2 {
    font-size: 1.3rem;
  }
  .name h4 {
    font-size: 0.8rem;
    color: #333;
  }

  .text {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .stats {
    margin-bottom: 1rem;
  }
  .stats li {
    min-width: 5rem;
  }
  .stats li h3 {
    font-size: 0.99rem;
  }
  .stats li h4 {
    font-size: 0.75rem;
  }

  .links button {
    font-family: "Poppins", sans-serif;
    min-width: 120px;
    padding: 0.5rem;
    border: 1px solid #222;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  .links .follow,
  .links .view:hover {
    background-color: #222;
    color: #fff;
  }
  .links .view,
  .links .follow:hover {
    background-color: transparent;
    color: #222;
  }

  @media screen and (max-width: 520px) {
    .name h2 {
      text-align: center;
      font-size: 0.8rem;
    }
    img {
      margin: auto;
      max-width: 10%;
      display: block;
    }
    .card img {
      width: 6rem;
      min-width: 80px;
    }
    .text {
      text-align: center;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    .card {
      display: block;
    }
    .infos {
      margin: auto;
      margin-left: 0;
      margin-top: 1rem;
    }
    .links button {
      min-width: 100px;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      margin: auto;
      max-width: 15%;
      display: block;
    }

    .card {
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      display: block;
    }
  }
`;
export default GuestCard;
