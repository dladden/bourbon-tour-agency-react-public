import React from "react";
import { useToursContext } from "../context/tours_context"; //hook
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Tour from "./Tour";
//TODO: check for loading, check for error, and iterate the featured tours
const FeaturedTours = () => {
  //getting the object from tours_context
  const {
    tours_loading: loading, //tours_loading with alias of loading
    tours_error: error,
    featured_tours: featured, //featured array
  } = useToursContext();
  //displaying loading if loading is true and url is
  if (loading) {
    return <Loading />;
  }
  //displaying loading if loading is true
  if (error) {
    return <Error />;
  }
  //Mapping though the featured array and selecting the tours from 0 to 2 with 3 being the cutoff
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Tours</h2>
      </div>

      <div className="section-center featured">
        {featured.slice(0, 3).map((tour) => {
          return <Tour key={tour.id} {...tour} />; //spreading the tours using the spread operator
        })}
      </div>
      <Link to="/tours" className="btn">
        Tours
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`s
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      border-radius: var(--images-radius);
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedTours;
