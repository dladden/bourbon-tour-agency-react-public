import React from "react";
import { GiBarrel, GiSaloon, GiGlassShot, GiTicket } from "react-icons/gi";
import styled from "styled-components";
import { priceFormat } from "../utils/helpers"; //component for formatting the price
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
//tour displays the featured tours on the home page
const Tour = ({ url, category, name, price, id }) => {
  const renderIcon = () => {
    switch (category) {
      case "tour":
        return <GiBarrel size={23} />;
      case "stay":
        return <GiSaloon size={23} />;
      case "food":
        return <GiGlassShot size={23} />;
      case "event":
        return <GiTicket size={23} />;
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <img src={url} title={name} alt={name} />
        <Link to={`/tours/${id}`} className="link">
          <AiFillSchedule />
        </Link>
      </div>
      <footer>
        <div className="tour-icon">{renderIcon()}</div>
        <h5 className="name">{name}</h5>
        <p className="price">{priceFormat(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--images-radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--images-radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
  .name {
    font-size: 1rem;
  }

  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Tour;
