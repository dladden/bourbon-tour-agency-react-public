import React from "react";
import styled from "styled-components";
import contactQR from "../assets/contact_qr.svg";
import owner from "../assets/owner.webp";
import socialLinks from "../utils/social_links";
import { email_link } from "../utils/constants";
//Component responsible for the OwnerCard used in Contact page
const OwnerCard = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="team">
          <div className="member">
            <img src={owner} alt="member_image" />
            <h3>Steven</h3>
            <h5>(999) 999-9999</h5>
            <span>
              <h5 className="email">{email_link}</h5>
            </span>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit metus auctor, eleifend sapien vel, pharetra elit. Sed
              aliquet leo vel odio pretium, at tincidunt sapien tristique.
              Aliquam consequat gravida odio, a aliquam turpis tincidunt ac:
            </p>

            <div className="date-time">
              <img
                src={contactQR}
                title="QR code to Static Web Application Contact Page"
                alt="QR code to Static Web Application Contact Page"
                className={{ height: 90, width: 90 }}
              />
            </div>
            <div className="social-links ">
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    className="social-link"
                    title="Social Links"
                    alt="Links to Social Media "
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
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

  h5 {
    text-transform: none;
  }

  body {
    background: #f4f4f4;
  }

  .container {
    margin-top: 25px;
  }

  .container img {
    border-radius: 50%;
  }
  .date-time img {
    border-radius: 0%;
  }
  .container .team {
    width: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }

  .container .team .member {
    width: 325px;
    margin: 10px;
    background: #fff;
    border-radius: var(--content-radius);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    padding: 25px;
  }

  .container .team .member img {
    width: 90px;
  }

  .container .team .member h3 {
    color: #444;
  }

  .container .team .member span {
    font-size: 12px;
    color: #999;
  }

  .container .team .member p {
    margin: 15px 0;
    font-weight: 400;
    color: #999;
    font-size: 15px;
    text-align: justify;
  }

  .container .team .member .btn a {
    background: #ddd;
    display: block;
    float: right;
    width: 125px;
    margin: 0 10px;
    padding: 10px;
    border-radius: 6px;
    color: #444;
    // text-transform: capitalize;
    transition: all 0.3s ease;
  }

  .container .team .member .btn a:hover {
    background: #5a36dd;
    color: #fff;
  }
  .email {
    font-size: 17px;
  }
  body {
    background: #eceff8;
  }
  .social-links {
    margin-top: 1rem;
    width: 17rem;
    display: flex;
    justify-content: space-between;
  }
  .social-link {
    font-size: 1.75rem;
    color: var(--clr-primary-9);
    transition: var(--transition);
  }
`;
export default OwnerCard;
