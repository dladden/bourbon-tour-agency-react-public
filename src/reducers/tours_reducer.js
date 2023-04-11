import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_APP_TOUR_BEGIN,
  GET_APP_TOUR_SUCCESS,
  GET_APP_TOUR_ERROR,
} from "../actions";
//This reducer takes care of all the actions which are dispatched in tours_context.js
const tours_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }; //returning the state
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }; //returning the state
  }
  //return all properties in the state if action type is tours begin this starts the loading process
  if (action.type === GET_TOURS_BEGIN) {
    return { ...state, tours_loading: true }; //returning the state
  }
  //Updating the arrays
  //Handling featured tours and ALL tours (if action is called update the arrays)
  if (action.type === GET_TOURS_SUCCESS) {
    //first setting up featured tours
    const featured_tours = action.payload.filter(
      (tour) => tour.featured === true
    ); //checking the filter for the featured check-mark
    //returning all the state
    return {
      ...state,
      tours_loading: false,
      tours: action.payload,
      featured_tours,
    }; //returning the state for featured and non featured tours
  } //end if
  //ERROR IS NOT FUNCTIONAL?
  if (action.type === GET_TOURS_ERROR) {
    return { ...state, tours_loading: false, tours_error: true };
  }
  //When user click on a tour the loading should be true and error to false so that when there is
  //actual error the state can be changed
  if (action.type === GET_APP_TOUR_BEGIN) {
    return { ...state, single_tour_loading: true, single_tour_error: false };
  }
  //if there is success pull the payload
  if (action.type === GET_APP_TOUR_SUCCESS) {
    return {
      ...state,
      single_tour_loading: false,
      single_tour: action.payload, //passed in the fetchappTour
    };
  }
  //if there is an error loading stops and error action is called
  if (action.type === GET_APP_TOUR_ERROR) {
    return { ...state, single_tour_loading: false, single_tour_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
