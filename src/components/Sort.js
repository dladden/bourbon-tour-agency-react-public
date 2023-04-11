import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import styled from "styled-components";
const Sort = () => {
  //accessing context from filter_context.js
  const {
    filtered_tours: tours,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsGridFill size={28} />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <FaList size={30} />
        </button>
      </div>
      <p> Total {tours.length}: Tours, Stays, Events. </p>
      <hr />
      {/* //sort with LABEL: sort */}
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort} //sort is a state
          onChange={updateSort}
        >
          {/* Sorting Selection (value is accessed in filter_context)*/}
          <option value="all">All</option>
          <option value="best-sell">Best Sellers</option>
          <option value="price-lowest">Price Low-High</option>
          <option value="price-highest">Price High-Low</option>
          <option value="name-highest">Name A - Z</option>
          <option value="name-lowest">Name Z - A</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      opacity: 0.4;
      border: none;
      background: transparent;
      // border: 1px solid var(--clr-black);
      color: var(--clr-primary-2);
      // width: 1.5rem;
      // border-radius: var(--radius);
      // height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      opacity: 1;
      // background: var(--clr-black);
      // color: var(--clr-white);
    }
  }
  .sort-input {
    width: 12rem;
    font-family: inherit;
    color: var(--clr-primary-5);
    background: var(--clr-grey-10);
    border-radius: var(--input-radius);
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
