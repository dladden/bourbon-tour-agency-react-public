import React from "react";
import { about0, about1, about2 } from "../utils/constants";
import styled from "styled-components";
import {
  Seo,
  PageHero,
  TourLogo,
  OwnerCard,
  DistilleriesList,
} from "../components";
import aboutImg0 from "../assets/Static-Web-Application-About-01.jpg";
import aboutImg1 from "../assets/Static-Web-Application-About-02.jpg";
import aboutImg2 from "../assets/Static-Web-Application-About-03.jpeg";
//Simple About page which multiple sections
const AboutPage = () => {
  return (
    <main>
      <Seo title="About" content="SEO Content" robots="index" href="/about" />
      <PageHero title="about" />
      <section id="about-static-web-application"></section>
      <TourLogo style={{ height: 250, width: 250 }} />
      <Wrapper className="page section section-center">
        <div className="about-heading">
          <h1 className="about-heading">About the Static Web Application</h1>
        </div>
        <div id="parallax-world-of-ugg">
          <section>
            <div className="parallax-one">
              <h2>Static</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character sc">A</span>
                {about0}
              </p>
            </div>
          </section>

          <section>
            <div className="parallax-two">
              <h2>Web</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character ny">I</span>
                {about1}
              </p>
            </div>
          </section>

          <section>
            <div className="parallax-three">
              <h2>Application</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character atw">T</span>
                {about2}
              </p>

              <section id="distilleries">
                <div>
                  <h5> The Distilleries:</h5>

                  <DistilleriesList />
                </div>
              </section>
              {/* dist */}
            </div>
          </section>
        </div>
        <OwnerCard />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  // display: grid;
  // gap: 4rem;
  // img {
  //   width: 100%;
  //   display: block;
  //   border-radius: var(--radius);
  //   height: 500px;
  //   object-fit: cover;
  // }

  // h1{
  //   font-size: 1rem;
  // }

  .about-heading{
    color: var(--clr-grey-8);
    text-align: center;
    font-size: 1.5rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  //two columns layout
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }

  /* Override UGG site */
  #main {
    width: 100%;
    padding: 0;
  }
  .content-asset p {
    margin: 0 auto;
  }
  .breadcrumb {
    display: none;
  }

  /* Helpers */
  /**************************/
  .margin-top-10 {
    padding-top: 10px;
  }
  .margin-bot-10 {
    padding-bottom: 10px;
  }

  /* Typography */
  /**************************/
  
  }
  h2 {

    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 10;
    opacity: 0.9;
  }
  p{
    font-size: 1.1rem;
  }
  }
  .first-character {
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }


  /* Section - Title */
  /**************************/
  .title {
    background: white;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
  }
  .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
  }

  /* Section - Block */
  /**************************/
  .block {
    background: white;
    padding: 30px;
    width: 1000px;
    margin: 0 auto;
    text-align: justify;
  }
  .block-gray {
    background: #f2f2f2;
    padding: 60px;
  }
  .section-overlay-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }

  /* Section - Parallax */
  /**************************/
  .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg0});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
  @media (min-width: 767px) {
    .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }

  .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg1});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 767px) {
    .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }
  .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg2});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 767px) {
    .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }

  /* Extras */
  /**************************/
.line-break {
    border-bottom: 1px solid black;
    width: 30rem;
    margin: 0 auto;
  }

  /* Media Queries */
  /**************************/
  @media screen and (max-width: 959px) and (min-width: 768px) {
    .block {
      padding: 40px;
      width: 620px;
    }
  }
  @media screen and (max-width: 767px) {
    .block {
      padding: 30px;
      width: 420px;
    }
    h2 {
      font-size: 30px;
    }
    .block {
      padding: 30px;
    }
    .parallax-one,
    .parallax-two,
    .parallax-three {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
  @media screen and (max-width: 479px) {
    .block {
      padding: 30px 15px;
      width: 290px;
    }
  }

`;
export default AboutPage;
