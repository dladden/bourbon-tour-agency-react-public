import React, { useRef, useState } from "react";
import axios from "axios"; //axios for post function request
import styled from "styled-components";
import Multiselect from "react-select";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import c_tour from "../assets/custom_tour.svg";
import { guests, trans, distilleries_select } from "../utils/constants";
import { MultiCalendarPicker, AmountButtons } from "../components";
import { useNavigate } from "react-router-dom";
//Component responsible for transportation type and count of guests
const CustomTour = () => {
  //The increase function uses count variable as storage and increments value by on
  //The function then prevents incremented amount from getting larger then the set max guests data
  const increase = () => {
    setGuest((count) => {
      let tempGuest = count + 1;
      if (tempGuest > guests) {
        tempGuest = guests;
      }
      return tempGuest;
    });
  };
  const decrease = () => {
    setGuest((count) => {
      let tempGuest = count - 1;
      if (tempGuest < 1) {
        tempGuest = 1;
      }
      return tempGuest;
    });
  };
  //useState VARIABLES:
  //variables for tour name:
  const [tour_name, setTour_name] = useState("");
  //variable for name of the poc
  const [guest_name, setGuest_name] = useState("");
  //email
  const [guest_email, setGuest_email] = useState("");
  //phone number
  const [phone_number, setPhone_number] = useState("");
  //mainTrans = current transportation, setTrans = sets transportation
  //default transportation will always be firs array item
  //in this case it is suv: const trans = ["suv", "van", "bus"];
  const [mainTrans, setTrans] = useState(trans[0]);
  //Reservation for a distillery
  const [reservation, setReservation] = useState("");
  //variable for comment portion
  const [guest_comment, setGuest_comment] = useState("");
  //Guests to be on the tour
  const [tour_guests, setGuest] = useState(1);
  //Multi-day calendar selection
  const [date, setDate] = useState(new Date());
  //using react-select dependency to store arrays of distilleries that the
  //customer chooses:
  const [distill, setDistill] = useState(null);
  //checkbox confirming that the tour must be reviewed
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  //invisible reCaptcha
  // const recaptchaRef = useRef(null);
  // const [captchaIsDone, setCaptchaIsDone] = useState(false);

  // const recaptchaRef = useRef(null);
  //useNavigate for navigation with timeout
  const navigate = useNavigate();
  //ReCaptcha
  const orderConfirmation = async () => {
    try {
      const response = await axios
        .post(
          "/.netlify/functions/custom-order-confirmation",

          JSON.stringify({
            guest_email,
            tour_name,
            guest_name,
            date,
            mainTrans,
            guests,
          })
        )
        .then((response) => response.json());
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  }; //end Order Submission

  //async function for handling the submission of the custom order
  const orderSubmission = async () => {
    try {
      const response = await axios
        .post(
          "/.netlify/functions/custom-order-submission",

          JSON.stringify({
            tour_name,
            guest_name,
            guest_email,
            phone_number,
            distill,
            reservation,
            guest_comment,
            date,
            mainTrans,
            guests,
            checked,
          })
        )
        .then((response) => response.json());
      if (!response.ok) {
        //all OK
        return;
      }
    } catch (error) {
      //error
    }
  }; //end Order Submission

  //HANDLE ON SUBMIT: async's two functions and times out to a custom confirmation page
  async function handleSubmit(event) {
    event.preventDefault();
    orderSubmission();
    orderConfirmation();
    setTimeout(() => {
      navigate("/submission-confirmation");
    }, 2500);
  } //end async Custom Order Submission
  return (
    <Wrapper>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <h2 className="heading">Custom From</h2>
            <div className="form-content">
              <div className="form-items">
                <div className="custom-logo-center">
                  <img
                    className="custom-logo"
                    src={c_tour}
                    title="Static Web Application Logo"
                    alt="Static Web Application Logo of A Lion with a Bourbon Bottle in the Left Paw"
                  />
                </div>
                <div className="form-heading">
                  <h3>Custom Form</h3>
                </div>
                <p>Submit the form and we will contact you within 24 hours.</p>
                {/* TOUR NAME */}
                <form
                  className="requires-validation"
                  onSubmit={handleSubmit}
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                >
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setTour_name(e.target.value)}
                      value={tour_name}
                      id="tour_name"
                      className="form-control"
                      type="text"
                      maxLength={30}
                      pattern="[\w\s]+"
                      name="tour_name"
                      placeholder="Tour Name*"
                      required
                    />
                    <div className="valid-feedback">
                      Give your tour a unique name.
                    </div>
                  </div>
                  {/* END TOUR NAME */}
                  {/*GUEST NAME */}
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setGuest_name(e.target.value)}
                      value={guest_name}
                      id="guest_name"
                      className="form-control"
                      type="text"
                      maxLength={30}
                      pattern="^[a-zA-Z\s]+"
                      name="guest_name"
                      placeholder="Full Name*"
                      required
                    />
                    <div className="valid-feedback">
                      Provide a point of contact for your tour.
                    </div>
                  </div>
                  {/*END GUEST NAME */}
                  {/* EMAIL */}
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setGuest_email(e.target.value)}
                      value={guest_email}
                      id="guest_email"
                      className="form-control"
                      type="email"
                      maxLength={100}
                      name="guest_email"
                      pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      placeholder="E-mail Address*"
                      required
                    />
                    <div className="valid-feedback">
                      Valid point of contact email.
                    </div>
                  </div>
                  {/* END EMAIL */}
                  {/* PHONE NUMBER */}
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setPhone_number(e.target.value)}
                      value={phone_number}
                      id="phone_number"
                      className="form-control"
                      type="text"
                      name="phone_number"
                      pattern="[0-9]*"
                      minLength="10"
                      placeholder="(999) 999-9999*"
                      required
                    />
                    <div className="valid-feedback">
                      Point of contact phone number.
                    </div>
                  </div>
                  {/* MULTI SELECT DISTILLERIES */}
                  <div className="col-md-12">
                    <div className="form-select mt-3" required>
                      <div>
                        <Multiselect
                          closeIcon={"circle"}
                          isObject={false}
                          // value={selectedValue}
                          onChange={setDistill}
                          // onRemove={handleChange}
                          // onSelect={handleChange}
                          options={distilleries_select}
                          isMulti
                          isClearable
                          placeholder="Select Distilleries*"
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 10,
                            colors: {
                              ...theme.colors,
                              primary25: "var(--clr-primary-8)",
                              primary: "var(--clr-primary-8)",
                              neutral10: "var(--clr-primary-8)",
                              neutral80: "var(--clr-white)",
                              dangerLight: "var(--clr-primary-7)",
                              danger: "var(--clr-white)",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div className="valid-feedback">
                      Select distilleries you are interested in.
                    </div>
                  </div>
                  {/* MULTI SELECT DISTILLERIES END */}
                  {/* RESERVATION */}
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setReservation(e.target.value)}
                      value={reservation}
                      id="reservation"
                      className="form-control"
                      type="text"
                      maxLength={30}
                      pattern="^[\w\s]+"
                      name="reservation"
                      placeholder="Reservations & Tastings"
                    />
                    <div className="valid-feedback">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </div>
                  </div>
                  {/* COMMENT */}
                  <div className="container">
                    {/* <form> */}
                    <div className="form-group">
                      <textarea
                        onChange={(e) => setGuest_comment(e.target.value)}
                        value={guest_comment}
                        maxLength={200}
                        pattern="^[a-zA-Z0-9 ]*$"
                        id="guest_comment"
                        className="form-control status-box"
                        rows="2"
                        placeholder="Add as much details as possible..."
                      ></textarea>
                    </div>
                    {/* </form> */}

                    <ul className="posts"></ul>
                  </div>
                  {/* END COMMENT */}
                  {/* MULTI-CALENDAR PICKER */}
                  <MultiCalendarPicker value={date} setDate={setDate} />
                  {date.length > 0 ? (
                    <p className="text-center">
                      <span className="bold">Start:</span>{" "}
                      {date[0].toDateString()}
                      &nbsp;|&nbsp;
                      <span className="bold">End:</span>{" "}
                      {date[1].toDateString()}
                    </p>
                  ) : (
                    <p className="text-center">
                      <span className="bold">Current Date:</span>{" "}
                      {date.toDateString()}
                    </p>
                  )}
                  {/* END MULTI-CALENDAR */}
                  {/* TRANSPORTATION */}
                  <div className="trans">
                    <span>Transportation: </span>
                    <div>
                      {trans.map((car, index) => {
                        return (
                          <button
                            key={index}
                            //terinary operator:"?" if mainTrans is a car that is the first choice display active
                            //":" if not: just display "trans-btn" styling
                            className={`${
                              mainTrans === car
                                ? "trans-btn active"
                                : "trans-btn"
                            }`}
                            onClick={() => setTrans(car)}
                          >
                            {/* {trans} */}
                            {car === "suv" ? (
                              <img
                                src={suv}
                                tittle="Suv Vehicle"
                                alt="Tour Transportation vehicle suv"
                              />
                            ) : null}
                            {car === "van" ? (
                              <img
                                src={van}
                                tittle="Van Vehicle"
                                alt="Tour Transportation vehicle van"
                              />
                            ) : null}
                            {car === "bus" ? (
                              <img
                                src={bus}
                                tittle="Bus Vehicle"
                                alt="Tour Transportation vehicle bus"
                              />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {mainTrans.length > 0 ? (
                    <p className="text-center">
                      <span className="bold">
                        {" "}
                        Current Transportation Chosen: {mainTrans}{" "}
                        {mainTrans === "suv" ? "(MAX 6 Guests)" : null}
                        {mainTrans === "van" ? "(MAX 15 Guests)" : null}
                        {mainTrans === "bus" ? "(MAX 20 Guests)" : null}
                      </span>
                    </p>
                  ) : (
                    <p className="text-center">
                      <span className="bold">
                        Current Transportation Chosen:
                      </span>{" "}
                      {mainTrans}
                    </p>
                  )}
                  {/* TRANSPORTATION END  */}
                  {/* GUESTS */}
                  <div className="btn-container">
                    <AmountButtons
                      guest={tour_guests}
                      increase={increase}
                      decrease={decrease}
                    />
                    Select Total Guests
                    {/* Link passes the arguments for addToCart context to be used in the cart */}
                  </div>
                  <hr className="hr" />
                  {/* GUESTS END  */}
                  <div className="form-check">
                    <input
                      onClick={handleClick}
                      defaultChecked={checked}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label">
                      {" "}
                      I confirm that my tour will be reviewed.
                    </label>
                    <div className="invalid-feedback">
                      By checking the box you acknowledge that your tour will be
                      first reviewed, there after receiving confirmation.
                    </div>
                  </div>
                  {/* ReCaptureRef */}
                  <div data-netlify-recaptcha="true"></div>
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Request
                    </button>
                  </div>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  *,
  body {
    font-weight: 400;
  }

  html,
  body {
    height: 100%;
  }

  .custom-logo {
    max-width: 20rem;
    padding-top: 20px;
  }
  .custom-logo-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-heading h3 {
    // text-align: center;
    // display: inline;
  }
  .heading {
    margin-top: 50px;
    text-align: center;
    font-weight: bold;
  }

  .form-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  .form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 20px;
  }

  .form-content .form-items {
    border: 4px solid #fff;
    padding: 20px;
    display: inline-block;
    width: 100%;
    min-height: 40px;
    min-width: 320px;
    max-width: 400px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 16px;
    text-align: left;
  }
  @media (min-width: 690px) {
    .form-content .form-items {
      padding: 40px;
      width: 100%;
      min-width: 695px;
    }
  }

  @media (min-width: 992px) {
    .form-content .form-items {
      width: 100%;
      min-width: 695px;
    }
  }

  .form-content h3 {
    color: var(--clr-primary-7);
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .form-content h3.form-title {
    margin-bottom: 30px;
  }

  .form-select {
    margin-top: 16px;
  }

  .form-content p {
    color: var(--clr-primary-4);
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .form-content label,
  .was-validated .form-check-input:invalid ~ .form-check-label,
  .was-validated .form-check-input:valid ~ .form-check-label {
    color: var(--clr-primary-4);
  }

  .form-content input[type="text"],
  .form-content input[type="comment"],
  .form-content input[type="email"],
  .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: var(--input-radius);
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8d8d8d;
    margin-top: 16px;
  }
  .recaptcha {
    padding-top: 0.8rem;
  }
  .btn {
    text-transform: uppercase;
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--btn-radius);
    margin: 11px;
  }

  .btn-primary {
    background-color: var(--clr-primary-5);
    outline: none;
    border: 0px;
    box-shadow: none;
  }

  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active {
    background-color: var(--clr-primary-9);
    outline: none !important;
    border: none !important;
    box-shadow: none;
  }

  .form-content textarea {
    font-family: "Times New Roman", Times, serif;
    position: static !important;
    width: 100%;
    padding: 9px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
  }

  .form-content textarea:hover,
  .form-content textarea:focus {
    font-family: "Times New Roman", Times, serif;
    border: 0;
    background-color: var(--clr-primary-11);
    color: #8d8d8d;
  }
  .form-group {
    margin-top: 16px;
  }

  .mv-up {
    margin-top: -9px !important;
    margin-bottom: 8px !important;
  }

  .valid-feedback {
    color: var(--clr-primary-4);
  }

  /*
=============== 
Comment Section
===============
*/

  .trans {
    display: grid;
    grid-template-columns: 110px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .trans-btn {
    display: inline-block;
    margin-right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  @media (min-width: 992px) {
    .trans-btn {
      font-size: 0.75rem;
      margin-left: 2rem;
      grid-template-columns: 20fr 20fr;
      grid-column-gap: 20px;
      align-items: center;
    }
  }
  @media (min-width: 992px) {
    .trans {
      font-size: 0.75rem;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 0rem;
  }
  .hr {
    border-top: 4px solid var(--clr-white);
    width: auto;
  }
  .btn {
    margin-top: 1rem;
    width: 132.5px;
  }
`;
export default CustomTour;
