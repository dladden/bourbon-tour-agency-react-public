import React from "react";
import styled from "styled-components";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import { priceFormat } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, image, name, trans, price, guests, date }) => {
  //imported from cart_context.js
  const { removeTour, toggleGuest, van_fee, bus_fee, oneSuv_fee, twoSuv_fee } =
    useCartContext();
  //function passes id + inc (increase)to cart_context so that +1 guest
  //can be added to a tour with that id (ex: recAKdIULeQWb8XlGVANdate inc)
  const increase = () => {
    toggleGuest(id, "inc");
  }; //end increase
  //function passes id + dec (decrease)to cart_context so that 1 guest
  //can be added to a tour with that id (ex: recAKdIULeQWb8XlGVANdate dec)
  const decrease = () => {
    toggleGuest(id, "dec");
  }; //end decrease
  //suvGuests used to calculate subtotal for multiple suvs if guests choose
  const suvGuests = () => {
    if (trans === "SUV" && guests >= 13) {
      return priceFormat(price + twoSuv_fee);
    } //end if 12+
    if (trans === "SUV" && guests >= 7) {
      return priceFormat(price + oneSuv_fee);
    } //end if 6+
    return priceFormat(price);
  };
  //converting both date to date objects
  const dateObj = new Date(date);

  return (
    <Wrapper>
      <div className="title">
        <img src={image} title={name} alt={name} />
        <div className="cart-item">
          {/* TOUR NAME */}
          <h5 className="name">{name}</h5>
          {/* END TOUR NAME */}
          {/* TOUR DATE */}
          <div>
            <h6 className="">
              <span className="bold">Date: </span>
              {dateObj.toDateString()}
            </h6>
          </div>
          {/* END TOUR DATE */}
          <h6>
            {trans === "SUV" && guests < 7 ? "+1 SUV fee: $0.00" : null}
            {trans === "SUV" && guests >= 7 ? "+1 SUV fee: $199.99" : null}
            {trans === "VAN" ? "VAN fee: $99.99" : null}
            {trans === "BUS" ? "BUS fee: $199.99" : null}
          </h6>
          {/* TRANSPORTATION */}
          <p className="transport">
            <span>
              {trans === "SUV" ? (
                <img
                  src={suv}
                  tittle="Suv Vehicle"
                  alt="Tour Transportation vehicle suv"
                />
              ) : null}
              {trans === "VAN" ? (
                <img
                  src={van}
                  tittle="Van Vehicle"
                  alt="Tour Transportation vehicle van"
                />
              ) : null}
              {trans === "BUS" ? (
                <img
                  src={bus}
                  tittle="Bus Vehicle"
                  alt="Tour Transportation vehicle bus"
                />
              ) : null}
            </span>
          </p>
          {/* END TRANSPORTATION */}
          {/* PRICE - HIDDEN WHEN SMALL */}
          <h5 className="price-small">{priceFormat(price)}</h5>
          {/* END PRICE - HIDDEN WHEN SMALL */}
        </div>
      </div>
      {/* PRICE */}
      <h5 className="price">{priceFormat(price)}</h5>
      {/* END PRICE */}
      <AmountButtons guest={guests} increase={increase} decrease={decrease} />
      <h5 className="subtotal">
        {trans === "SUV" ? suvGuests() : null}
        {trans === "VAN" ? priceFormat(price + van_fee) : null}
        {trans === "BUS" ? priceFormat(price + bus_fee) : null}
      </h5>
      <div className="remove-btn-container">
        <button
          type="button"
          className="remove-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          <CgClose />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: left;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    padding: 0;
    margin: 0;
    color: var(--clr-primary-4);
    font-size: 0.75rem;
    margin-bottom: 0;
    text-align: left;
  }
  .cart-item {
    text-align: left;
  }
  .transport {
    color: var(--clr-main-1);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 2rem;
      // height: 1rem;
      margin-left: 0rem;
      // border-radius: var(--radius);
    }
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .name {
    text-align: left;
    font-size: 0.8rem;
  }
  .remove-btn-container {
    margin: 0 auto;
    position: relative;
    margin: auto;
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    font-size: 1rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
      text-align: left;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      text-align: left;
      font-size: 1rem;
    }
    .transport {
      font-size: 0.85rem;
      span {
        width: 2.5rem;
        // height: 1rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    // align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: left;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
