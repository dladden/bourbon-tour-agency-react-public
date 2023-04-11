import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/tours_reducer";
//tours_url is imported from out constants and called url in this file
import { tours_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_TOURS_BEGIN, //var for loading the tour
  GET_TOURS_SUCCESS, //var for when tour is loaded and there is no errors
  GET_TOURS_ERROR, //var for error handling
  GET_APP_TOUR_BEGIN,
  GET_APP_TOUR_SUCCESS,
  GET_APP_TOUR_ERROR,
} from "../actions";
//the Tours Context uses the useReducer
//It also uses state to control the application state and dispatch for the control of the state
const initialState = {
  //values for the all tours view to be selected by user (used in tour_reducer.js)
  isSidebarOpen: false, //var for the panel state (default state false)
  tours_loading: false, //var for loading state
  tours_error: false, //var for error handling
  tours: [], //empty var for actual data aka tours aka all data pulled from reducer
  featured_tours: [], //empty var for featured tours
  //values for each tour page
  single_tour_loading: false, //
  single_tour_error: false,
  single_tour: {}, //empty var object for single tour
}; //empty object

const ToursContext = React.createContext();
//Context responsible for the sidebar when the screen is at certain size.
export const ToursProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); //state and dispatch use reducer hook and function from tours_reducer.js
  //openSidebar dispatches and action without parameters
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  //this Try-Catch portion resposible for fetching all the tours without the id
  //The Tours are showcased in 2 locations: HomePage.js and ToursPage.js to make this easier and fetch the api once instead of twice
  const fetchTours = async (url) => {
    dispatch({ type: GET_TOURS_BEGIN }); //set up in tours_reducer.js
    //this try-catch fetches the data
    try {
      const response = await axios.get(url);
      const tours = response.data; //data is in the array property stored to tours
      //React dispatch ACTION
      dispatch({ type: GET_TOURS_SUCCESS, payload: tours }); //action setup (dispatch called GET_APP_TOUR_SUCCESS with payload of tours)
    } catch (error) {
      dispatch({ type: GET_TOURS_ERROR }); //handling error in reducer
    }
  }; //end fetchTours
  //dispatch for all the tours
  const fetchappTour = async (url) => {
    dispatch({ type: GET_APP_TOUR_BEGIN }); //dispatching when user click on the tour
    try {
      const response = await axios.get(url); //using axios for asynchronous http request
      const appTour = response.data;
      dispatch({ type: GET_APP_TOUR_SUCCESS, payload: appTour.fields }); //dispatching an action with payload of the appTour with data
    } catch (error) {
      dispatch({ type: GET_APP_TOUR_ERROR });
    }
  };

  //useEffect that fetches tours
  //this useEffect runs once on render since dependency array is empty
  useEffect(() => {
    fetchTours(url);
  }, []);
  //Here, we are using the context provider as way to pass data through the component tree
  //single Product Fetch is passed down the context
  return (
    <ToursContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchappTour }}
    >
      {children}
    </ToursContext.Provider>
  );
}; //end ToursProvider
//useToursContext HOOK
export const useToursContext = () => {
  return useContext(ToursContext);
};
