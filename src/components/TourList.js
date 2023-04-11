import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
//tourList used for displaying the tours in either grid view or list view
const TourList = () => {
  //filtered_tours is passed from FilterContext (filter_context.js) as alias of tours
  const { filtered_tours: tours, grid_view } = useFilterContext();

  if (tours.length < 1) {
    return (
      <h5 className={{ textTransform: "none" }}>
        No Tours Matched The Search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView tours={tours} />;
  }

  return <GridView tours={tours}>Tour List</GridView>;
};

export default TourList;
