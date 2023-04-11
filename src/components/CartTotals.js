import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { priceFormat } from "../utils/helpers";
import { HashLink as Link } from "react-router-hash-link";

const CartTotals = () => {
  //values from cart_context.js
  const { total_amount, tax } = useCartContext();

  const total_tax = total_amount * (tax / 100);

  //values from user_context.js for functional rendering (if user not logged in set login)
  const { tourUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal:{" "}
            <span>
              {total_amount === 0 ? "$0.00" : `${priceFormat(total_amount)}`}
            </span>
          </h5>
          <p>
            Taxes & Fees: <span>{priceFormat(total_tax)}</span>
          </p>
          <hr />
          <h5>
            Reservation Total :{" "}
            <span>{priceFormat(total_amount + total_tax)}</span>
          </h5>
        </article>
        {tourUser ? (
          <Link smooth to="/checkout#checkout-form" className="btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            Sign in
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 2px solid var(--clr-primary-10);
    border-radius: var(--content-radius);
    padding: 1.5rem 1rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
    article {
      border: 2px solid var(--clr-primary-10);
      border-radius: var(--content-radius);
      padding: 1.5rem 3rem;
    }
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  @media screen and (max-width: 450px) {
    .btn {
      margin: 0 auto;
      display: block;
      width: 100%;
      max-width: 280px;
      margin-top: 1rem;
      text-align: center;
      font-weight: 700;
    }
  }
`;

export default CartTotals;
