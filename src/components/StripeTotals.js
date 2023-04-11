import React, { useState } from "react";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers";
import { useCartContext } from "../context/cart_context"; //cart context
// import { Link } from "react-router-dom";
//Component responsible for the OwnerCard used in Contact page
const StripeTotals = () => {
  const { total_amount, tax, discountAmount } = useCartContext();
  const { calculateDiscount } = useCartContext();
  //total with subtracted disc
  const total_amount_disc = total_amount - discountAmount;
  //calculating total with tax
  const total_tax = total_amount_disc * (tax / 100);
  //using state variable for the code input
  const [coupon_code, setCoupon_code] = useState("");

  return (
    <Wrapper>
      <div className="cc-info">
        <div className="discount-container">
          <input
            onChange={(e) => setCoupon_code(e.target.value)}
            // className="discount-input"
            id="coupon_code"
            name="coupon_code"
            type="text"
            maxLength={21}
            className="text"
            placeholder="Add Discount Code"
          />
          <button
            type="button"
            className="apply-button"
            onClick={() => {
              process.env.REACT_APP_DISC_CODE === coupon_code &&
                calculateDiscount();
            }}
          >
            Apply
          </button>
        </div>
        {/* END DISCOUNT & EMAIL PORTION */}
        {/* TOTALS */}
        <div className="totals">
          <h6 className="disc-totals-text">
            Discount:{" "}
            <span className="total-span">
              {discountAmount ? priceFormat(discountAmount) : "Not Valid"}
            </span>
          </h6>
          <h6 className="subtotals-text">
            Subtotal:{" "}
            <span className="total-span">{priceFormat(total_amount_disc)}</span>
          </h6>
          <h6 className="subtotals-text">
            Taxes & Fees:{" "}
            <span className="total-span">{priceFormat(total_tax)}</span>
          </h6>
          <h6 className="totals-text">
            Total:{" "}
            <span className="total-span">
              {priceFormat(total_amount_disc + total_tax)}
            </span>
          </h6>
        </div>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  h4,
  h5,
  h6,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
  }
  .disc-totals-text {
    font-size: 1em;
    color: var(--clr-grey-4);
  }

  .subtotals-text {
    font-size: 1em;
    color: var(--clr-primary-7);
  }

  .totals-text {
    font-weight: 800;
    font-size: 1.2em;
    color: var(--clr-primary-5);
  }

  @media screen and (max-width: 736px) {
    h4,
    h5,
    h6,
    p {
      display: grid;
      grid-template-columns: 80% 22%;
      text-transform: capitalize;
    }

    .totals-text .total-span {
      // margin-right: 0;
      // float: right;
    }

    .total-span {
      align-items: end;
    }
  }

  /*
=============== 
DISCOUNT INPUT BUTTON
===============
*/
  .discount-container {
    display: inline-block;
    position: relative;
  }
  .apply-button {
    cursor: pointer;
    padding: 0px;
    background-color: var(--clr-primary-9);
    border-radius: var(--input-radius);
    position: absolute;
    right: 0.2em;
    top: 0.5em;
    width: 4em;
    height: 1.9em;
  }
  .discount-input {
    padding: 0.5em 3.5em 0.5em 0.5em;
  }
`;
export default StripeTotals;
