import React from "react";
import { Faq } from "../components";
import {
  RiMailOpenFill,
  RiFacebookCircleFill,
  RiWhatsappFill,
  RiInstagramFill,
} from "react-icons/ri";
import {
  messenger_link,
  instagram_link,
  whats_app_link,
  email_link,
} from "../utils/constants";
import styled from "styled-components";
import messenger from "../assets/messenger_qr_code.svg";
import instagram from "../assets/instagram_qr_code.svg";
import whats_app from "../assets/whatsapp_qr_code.svg";
import email from "../assets/email_qr_code.svg";
//List View is responsible for displaying the tours in an inline view
const ContactList = () => {
  return (
    <Wrapper>
      <div>
        <div className="contact">
          <h1 className="heading">Contact Us</h1>
          <div className="contact-car">
            <div className="left">
              <div className="qr-code color-1">
                <img
                  src={messenger}
                  title="Messenger QR Code"
                  alt="QR Code to Our Facebook Messenger for easy connection"
                  style={{ height: 60, width: 60 }}
                />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  {" "}
                  <RiFacebookCircleFill /> Messenger
                </h3>

                <p className="event-detail">
                  Contact us on Facebook Messenger and we will respond within 24
                  hours with any question!
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={messenger_link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="contact-car">
            <div className="left">
              <div className="qr-code color-2">
                <img
                  src={instagram}
                  title="Instagram QR Code"
                  alt="QR Code to Our Instagram Page for easy connection"
                  style={{ height: 60, width: 60 }}
                />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  <RiInstagramFill /> Instagram
                </h3>

                <p className="event-detail">
                  Follow us on Instagram, and don't hesitate to send us a
                  message at your convenience. We will respond within 24 hours
                  with any questions!
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="contact-car">
            <div className="left">
              <div className="qr-code color-2">
                <img
                  src={whats_app}
                  title="WhatsApp QR Code"
                  alt="QR Code to Our WhatsApp for easy connection"
                  style={{ height: 60, width: 60 }}
                />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  <RiWhatsappFill /> WhatsApp
                </h3>

                <p className="event-detail">
                  Are you a fan of WhatsApp? We are too. If this is your
                  preferred method of communication, reach out to us there.
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={whats_app_link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="contact-car">
            <div className="left">
              <div className="qr-code color-2">
                <img
                  src={email}
                  title="Our Email QR Code"
                  alt="QR Code to Our Email for easy connection"
                  style={{ height: 60, width: 60 }}
                />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  <RiMailOpenFill /> Email
                </h3>

                <p className="event-detail">
                  Our Email! it is a sure way to contact us with any technical
                  questions or book a tour if you need to create something more
                  unique. Whether it is a larger group than 20 or the need for
                  more accommodation.
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a href={"mailto:" + email_link} className="contact-button">
                Contact
              </a>
            </div>
          </div>
          <Faq />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    transition: ease 0.5s;
  }

  .heading {
    text-align: center;
  }

  .contact {
    width: 100%;
    max-width: var(--fixed-width);
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .event-info {
  }
  .event-name {
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .event-name {
      width: 100%;
      font-size: 15px;
    }
  }

  .right-gap {
  }

  .contact-car {
    width: 100%;
    background: var(--clr-white);
    border-radius: var(--content-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .contact-car:hover {
    box-shadow: var(--clr-primary-9) 0 0 10px 5px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .qr-code {
    flex: 0 0 80px;
    width: 100px;
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }

  .color-1 {
    background: var(--clr-primary-9);
  }
  .color-2 {
    background: var(--clr-primary-9);
    );
  }
  .color-3 {
    background: var(--clr-primary-9);
  }
  .color-4 {
    background: var(--clr-primary-9);
  }

  .date {
    font-size: 12px;
    font-weight: 600;
  }

  .time {
    font-size: 22px;
    font-weight: 700;
  }

  .event-detail {
    font-size: 11px;
    color: var(--clr-grey-2)
    margin-top: 5px;
  }

  .contact-button {
    width: 4rem;
    // display: inline-block;
    background: var(--clr-primary-4);
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: var(--btn-radius);
  }
  .contact-button:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
  }

  @media  screen and (min-width: 576px) {
    .event-detail {
      width: 100%;
      font-size: 15px;
      }
  }
  @media  screen and (min-width: 376px) {
  .contact-button {
    width: 5rem;
    font-size: 15px;
    padding: 10px 5px;
    }
  .contact-button:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
    }
  }

`;

export default ContactList;
