import React, { useState } from "react";
import styled from "styled-components";
//Default main image is the first in the array passed from parent appTourPage
//Using the ES6 default parameters to check if images are undefined first 'images = []'
//'{ url: "" }' is used to update empty url if it is undefined to initialize a nonzero return
const TourImages = ({ images = [{ url: "" }] }) => {
  //main is for the main image, and setImage is
  const [main, setMain] = useState(images[0]);
  //initially undefined item which contains the url
  return (
    <Wrapper>
      <img
        src={main.url}
        title={main.filename}
        alt={main.filename}
        className="main"
      />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              title={image.filename}
              alt={image.filename}
              key={index}
              //setMain function passes the image index once clicked
              onClick={() => setMain(images[index])}
              //showcasing which image index is clicked with
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.7rem;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
  //844px
`;

export default TourImages;
