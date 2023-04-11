import React from "react";
import styled from "styled-components";
import {
  Seo,
  PageHero,
  StripeCheckout,
  CustomTourLink,
  CartLogo,
} from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  //cart used to check if the carts length if empty display div with
  //if it has items display the StripeCheckout
  const { cart } = useCartContext();
  return (
    <main>
      <Seo
        title="Checkout"
        content="SEO Content"
        robots="index"
        href="/checkout"
      />
      <PageHero title="checkout" />
      <Wrapper className="page-checkout">
        {cart.length < 1 ? (
          <div className="empty">
            <CartLogo />
            <h2>Nothing to Book </h2>
            <Link to="/tours" className="btn">
              Find A Tour
            </Link>
            <div className="or-h5">
              <h5>Or</h5>
            </div>
            <div className="section-center">
              <CustomTourLink />
            </div>
          </div>
        ) : (
          <section id="checkout-form">
            <StripeCheckout />
          </section>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  h5 {
    padding-top: 1rem;
    text-align: center;
  }
  .empty {
    text-align: center;
    h2 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .or-h5 {
    text-align: center;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
  .page-checkout {
    min-height: calc(100vh - (20vh + 10rem));
  }
`;
export default CheckoutPage;
