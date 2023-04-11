import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slides } from "../utils/constants";

const ImageSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper>
      <div className="section-center slider-section">
        <a href="https://www.facebook.com">
          <h4>Visit Our Facebook Page</h4>
        </a>
        <div className="slide-container ">
          <Slide>
            {slides.map((slideImage, index) => (
              <div
                className="each-slide each-slide-effect"
                title={slideImage.title}
                alt={slideImage.alt}
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundPosition: "center",
                    height: "390px",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .slider-section {
    padding-top: 5rem;
    display: block;
    overflow: hidden;
    justify-content: center;
  }
  h4 {
    text-decoration: underline;
    color: var(--clr-primary-9);
    text-align: center;
  }

  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    max-width: 100%;
  }

  .each-slide-effect {
    padding: 0px;
    font-size: 1.25rem;
    // background: #fff;
    text-align: center;
  }
  @media (min-width: 992px) {
    .slider-section {
    }
    h4 {
      text-align: right;
    }
  }

  .prevArrow {
  }
`;

export default ImageSlider;
