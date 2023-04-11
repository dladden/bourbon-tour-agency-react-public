import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import {
  Seo,
  CartContent,
  PageHero,
  CustomTourLink,
  CartLogo,
} from "../components";

const CartPage = () => {
  //importing cart array from context
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <Seo title="Cart" content="SEO Content" robots="index" href="/cart" />
        <PageHero title="cart" />
        <CartLogo />
        <div className="empty">
          <h2>Cart is Empty</h2>
          <Link to="/tours" className="btn">
            Find A Tour
          </Link>
        </div>
        <div className="or-h5">
          <h5>Or</h5>
        </div>
        <div className="section-center">
          <CustomTourLink />
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Seo title="Cart" content="SEO Content" href="/cart" />
      <PageHero title="cart" />
      <Wrapper className="page">
        <section id="user-cart">
          <CartLogo />
          <CartContent />
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  h5 {
    padding-top: 1rem;
    // text-align: center;
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
  @media (min-width: 900px) {
    padding: 0;
    .section-center {
      // transform: translateY(5rem);
    }
  }
`;

export default CartPage;
