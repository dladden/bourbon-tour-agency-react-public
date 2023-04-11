import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_TOURS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_TOURS,
  UPDATE_FILTERS,
  FILTER_TOURS,
  CLEAR_FILTERS,
} from "../actions";
//Grabbing the context from the tour_context hook
import { useToursContext } from "./tours_context";
//Filter Context is responsible for providing
//two properties: filtered - changes as the user changes the filter;
//all_tours - stays the same, used to return to default
//grid_view - toggle for the view
//sort - controlled input that changes depending on the value set in Sort.js form
//filters - object with multiple properties for sorting objects / values
const initialState = {
  filtered_tours: [], //initially an empty array
  all_tours: [],
  grid_view: false,
  sort: "all",
  filters: {
    search_text: "",
    category: "all",
    distillery: "all",
    transport: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    special_res: false,
  },
};
//Filter Context all the actions are handled in Filter Reducer (filter_reducer.js)
const FilterContext = React.createContext();

//useReducer
export const FilterProvider = ({ children }) => {
  //tours cannot be passed into the initialState of this filter_context must be done with useEffect
  const { tours } = useToursContext(); //here we are grabbing the tours initial state from tours_context (initially empty array)
  const [state, dispatch] = useReducer(reducer, initialState);
  //This use effect dispatches action (FROM actions/toolkit) load tours when called on (replaces the empty array)
  //NOTE: this useEffect has a dependency array and is triggered every time there is a change in tours array
  //It disptaches the type and payload which is the actual data
  useEffect(() => {
    dispatch({ type: LOAD_TOURS, payload: tours });
  }, [tours]);

  //IMPORTANT: this useEffect dispatches the call for filtering
  //useEffect uses the dependency array to change the sate of the data
  //two action types are called filter tours and sort tours on change
  useEffect(() => {
    dispatch({ type: FILTER_TOURS });
    dispatch({ type: SORT_TOURS });
  }, [tours, state.sort, state.filters]);

  //View setters for grid-view and list-view
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  //updateSort
  //sorting e = event objet dispatches value update when value is changed
  //Value is the actual option that the user is choosing pulled with EVENT TARGET .value
  //which is in Sort.js passed from the <form>
  //this is then the value is dispatched
  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    //you can see actual selection
    //dispatching an action with value which was selected
    dispatch({ type: UPDATE_SORT, payload: value });
  }; //end updateSort

  //Constants for filtering
  //function called on every-time a change occurs in the filters
  const updateFilters = (e) => {
    let name = e.target.name; //name of the action
    let value = e.target.value; //the value of the action
    //unable to reach the value using dot value in category
    //to bypass this we use a textContent property to get the text in the button
    if (name === "category") {
      value = e.target.textContent;
    }
    //catching the data from the filter.js transportation portion
    if (name === "transport") {
      value = e.target.dataset.transport;
    }
    //using javascript Number package to confirm/covert value to integer always
    if (name === "price") {
      value = Number(value);
    }
    //getting the checked target from the Special Reservation in filters.js
    if (name === "special_res") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  //function which clears filters on click
  const clearFilters = (e) => {
    dispatch({ type: CLEAR_FILTERS });
  };

  //state passing filtered_tours: [], all_tours: [].
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
//useFilterContext HOOK
export const useFilterContext = () => {
  return useContext(FilterContext);
};
