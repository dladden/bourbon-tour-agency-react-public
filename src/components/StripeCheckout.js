import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/checkout_list_border.svg";
import card from "../assets/checkout_card.svg";
import styled from "styled-components";
import Multiselect from "react-select";
import { country_data, checkout_clause } from "../utils/constants";
import { loadStripe } from "@stripe/stripe-js"; //function from Stripe for React
//Hook imports from Stripe for React
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import { GuestCard, StripeTotals } from "../components";
import axios from "axios"; //axios for post function request
import { useCartContext } from "../context/cart_context"; //cart context
import { useUserContext } from "../context/user_context"; //user context
import { priceFormat } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
//This is test public API key which is passed with the component for authentication
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// const discount_code = process.env.REACT_APP_DISC_CODE;

//CheckoutForm component returns all stripe
//this Component makes a post call to Strapi using netlify funcs in create-payment-intent.js
//, then it gets a callback with clientSecret which is then used to
const CheckoutForm = () => {
  //globals variables used in createPaymentIntent
  const { cart, total_amount, tax, discountAmount, clearCart } =
    useCartContext();

  //country selection from us to ca
  const [country, setCountry] = useState(null);
  //state variables for discount code

  const { tourUser } = useUserContext();
  console.log(tourUser);
  const navigate = useNavigate();
  //STRIPE state variables: If the payment is successful
  const [succeeded, setSucceeded] = useState(false); //initialized as FALSE
  const [error, setError] = useState(null);
  //variables for processing states
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  //clientSecret is Stripe callback API token for user
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const total_formatted = priceFormat(total_amount);

  //createPaymentIntent uses axios to POST the data when the component mounts to Stripe.
  //This is done with netlify serverless functions to post it to the server
  //This get request is done with a try and catch to catch errors its equivalent
  //to an https request from a server (in this case serverless netlify func.)
  const createPaymentIntent = async () => {
    try {
      //post request:
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        //data of the post request as a string:
        JSON.stringify({ cart, total_amount, tax, discountAmount })
      );
      //unique Secret pulled every time as soon as the user gets to checkout
      setClientSecret(data.clientSecret); //pulling client secret from response
    } catch (error) {}
  };

  //orderSubmission is SMTP email which sends the a order confirmation to the sbt
  //business email with the data needed to further process the registration for
  //a tour. this email is sent using the serverless functions
  const orderSubmission = async () => {
    try {
      const response = await axios.post(
        "/.netlify/functions/order-submission",

        JSON.stringify({ cart, total_amount, tourUser })
      );
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  }; //end async orderSubmission

  //this function takes care of the SendGrid dynamic email template that is sent to the signed-in
  //user upon payment confirmation passing the data needed to be shown to the user as a order
  //confirmation
  const orderConfirmation = async () => {
    try {
      const response = await axios.post(
        "/.netlify/functions/order-confirmation",

        JSON.stringify({ cart, total_formatted, tourUser })
      );
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  };

  //useEffect that only invoked when component mounts bc of empty dependency array
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, [discountAmount]);

  //handling change provided by Stripe API
  //This function uses the event which points to the event object
  const handleChange = async (event) => {
    //data requested
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }; //end handleChange

  //handling submit e = event Stripe docs
  const handleSubmit = async (e) => {
    e.preventDefault(); //stop the form from being submitted if there's an error
    setProcessing(true); //on submit the processing beings
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          address: {
            city: e.target.city.value,
            country: "US",
            line1: e.target.street.value,
            postal_code: e.target.postal_code.value,
            state: e.target.state.value,
          },
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone_number.value,
        },
      },
    });
    //handling the error if processing fails
    if (payload.error) {
      setError(`Payment Failed: ${payload.error.message}`);
      setProcessing(false);
    }
    //else the processing was successful
    else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      orderSubmission();
      orderConfirmation();
      //Taking user back to home page, clearing cart --------------------------------------------------------------------
      setTimeout(() => {
        clearCart();
        navigate("/confirmation");
      }, 2500);
    }
  }; //end handleSubmit

  const cardStyle = {
    style: {
      base: {
        iconColor: "#7f7367",
        color: "#3e3b35",
        fontWeight: "500",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div>
      <img
        className="cart-logo"
        src={logo}
        title="Integrated with Stripe, Auth0 and Okta"
        alt="Logo with integrated services for this site like Stripe and Auth0"
        style={{ width: 400 }}
      />
      <div className="wrapper">
        <div className="container">
          <form id="payment-form" onSubmit={handleSubmit}>
            <div className="from-logo">
              <img
                src={card}
                title="Credit Card Logo"
                alt="Credit Card Logo with available checkout payments like Visa and Mastercard"
              />
            </div>
            {/* USER CARD */}
            <GuestCard />
            {/* END USER CARD */}
            {/* BILLING PORTION (name, phone_number, country, street, city, state, postal_code)*/}
            <h1>
              <i className="fas fa-shipping-fast"></i>
              Billing Details
            </h1>
            <div className="name">
              <div>
                <label>Full Name</label>
                <input
                  className="text"
                  type="text"
                  id="name"
                  name="name"
                  maxLength={30}
                  // pattern="[\w\s]+"
                  placeholder="First & Last Name*"
                  required
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  className="text"
                  id="phone_number"
                  type="text"
                  name="phone_number"
                  // pattern="[0-9]*"
                  minLength="10"
                  placeholder="(999) 999-9999*"
                  required
                />
              </div>
            </div>
            <div className="">
              <div>
                <label>Country</label>
                <div>
                  <Multiselect
                    className="text"
                    closeIcon={"circle"}
                    isObject={false}
                    // value={selectedValue}
                    onChange={setCountry}
                    // onRemove={handleChange}
                    // onSelect={handleChange}

                    options={country_data}
                    defaultValue={{
                      label: "United States",
                      value: "United States",
                    }}
                    placeholder="Select Country"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 10,
                      colors: {
                        ...theme.colors,
                        primary25: "var(--clr-primary-8)",
                        primary: "var(--clr-primary-8)",
                        neutral10: "var(--clr-primary-8)",
                        neutral80: "black",
                        dangerLight: "var(--clr-primary-7)",
                        danger: "var(--clr-white)",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="street">
              <label>Street</label>
              <input
                id="street"
                type="text"
                name="street"
                maxLength={100}
                // pattern="^[a-zA-Z0-9 ]*$"
                className="text"
                placeholder="Street Name*"
              />
            </div>
            <div className="address-info">
              <div>
                <label>City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  maxLength={50}
                  // pattern="^[a-zA-Z0-9 ]*$"
                  className="text"
                  placeholder="City*"
                />
              </div>
              <div>
                <label>State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  maxLength={5}
                  // pattern="^[a-zA-Z0-9 ]*$"
                  className="text"
                  placeholder="State*"
                />
              </div>
              <div>
                <label>Zip</label>
                <input
                  id="postal_code"
                  name="postal_code"
                  type="text"
                  maxLength={10}
                  // pattern="^[0-9]*"
                  className="text"
                  placeholder="Zip-Code*"
                />
              </div>
            </div>
            {/* END BILLING PORTION */}
            {/* DISCOUNT & EMAIL PORTION */}
            <h1>
              <i className="far fa-credit-card"></i> Contact Info.
            </h1>
            <div className="cc-num">
              <label>Billing Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                maxLength={100}
                // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                placeholder="E-mail Address*"
                required
              />
            </div>

            <StripeTotals />

            <div>
              <CardElement
                id="card-element"
                options={cardStyle}
                onChange={handleChange}
              />
              {/* Submit Button is disabled if the payment is processing or disabled or succeeded */}
              <button
                disabled={processing || disabled || succeeded}
                id="submit"
              >
                <span id="button-text">
                  {processing ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Pay"
                  )}
                </span>
              </button>
              {/* Error Handling */}
              {error && (
                <div className="card-error" role="alert">
                  {error}
                </div>
              )}
              {/* Success Message */}
              <p
                className={
                  succeeded ? "result-message" : "result-message hidden"
                }
              >
                Payment Successful!
              </p>
            </div>
          </form>
          <h6 className="clause">
            {checkout_clause}
            <Link to="/privacy" className="privacy-link">
              here.
            </Link>
          </h6>
        </div>
      </div>

      {/* CardElement is embedded directly from Stripe */}
    </div>
  );
}; //end CheckoutForm

//The rendering is happening here: element with api wraps the checkout form
const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
  }

  h6 {
    font-size: 1rem;
  }
  .privacy-link {
    color: var(--clr-primary-8);
  }

  /*
=============== 
STRIPE STYLING
===============
*/

  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: var(--content-radius);
    padding: 60px;
    background-color: var(--clr-primary-10);
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  #card-element {
    border-radius: 10px 10px 0 0;
    padding: 12px;
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }

  /* Buttons and links */
  button {
    // background: #5469d4;
    background: var(--clr-green-dark);
    color: #ffffff;
    border-radius: 0 0 10px 10px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: var(--clr-green-dark);
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: var(--clr-green-dark);
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }

  .from-logo {
    max-width: 460px;
    margin-left: auto;
    margin-right: auto;
  }

  /*
=============== 
FORM CONTAINER
===============
*/

  .container {
    align-self: center;
    width: 100%;
    padding: 5% 5%;
    max-width: 850px;
    margin: 0 auto !important;
    // float: none !important;
  }

  h1 {
    align-self: left;
  }

  form {
    width: 100%;

    > * {
      margin-top: 20px;
    }

    input {
      padding: 9px 15px;
      width: 100%;
      min-height: 35px;
      border: 0;
      font-size: 1rem;
      letter-spacing: 0rem;
      margin-top: 5px;
      color: $maroon;
      border-radius: var(--input-radius);
    }

    label {
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      color: var(--clr-primary-7);
    }

    h1 {
      font-size: 24px;
      line-height: 10px;
      color: $title;
      letter-spacing: 1px;
    }

    h1:nth-of-type(2) {
      margin-top: 10%;
    }
  }

  .name {
    justify-content: space-between;
    display: flex;
    width: 100%;

    div {
      width: 45%;
    }
  }

  .address-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 30%;
    }
  }

  .cc-info {
    display: flex;
    justify-content: space-between;
    div {
      width: 45%;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      margin: 3px 0;
      height: 30px;
      width: 40%;
      color: #cfc9e1;
      background-color: #4a3b76;
      text-transform: uppercase;
      border: 0;
      border-radius: 0.3rem;
      letter-spacing: 2px;

      &:hover {
        animation-name: btn-hov;
        animation-duration: 550ms;
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes btn-hov {
    100% {
      background-color: #cfc9e1;
      color: #4a3b76;
      transform: scale(1.05);
    }
  }

  input:focus,
  button:focus {
    outline: none;
  }

  @media (max-width: 736px) {
    .wrapper {
      width: 100%;
    }

    .container {
      width: 100%;
    }

    .btns {
      align-items: center;

      button {
        width: 50%;
      }
    }

    form h1 {
      text-align: left;
    }

    .name,
    .address-info,
    .cc-info {
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      div {
        align-items: left;
        flex-direction: column;
        width: 100%;
        display: flex;
      }
    }
    .far fa-credit-card {
      margin: 5px;
    }
    .street,
    .cc-num {
      text-align: left;
    }

    input {
      margin: 5px 0;
      min-height: 30px;
    }
  }
  .clause {
    color: var(--clr-primary-9);
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export default StripeCheckout;
