//All actions variables:
//These action are responsible for loading the tour into the components
export const SIDEBAR_OPEN = "SIDEBAR_OPEN";
export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";
export const GET_TOURS_BEGIN = "GET_TOURS_BEGIN"; //var for loading the tour
export const GET_TOURS_SUCCESS = "GET_TOURS_SUCCESS"; //var for when tour is loaded and there is no errors
export const GET_TOURS_ERROR = "GET_TOURS_ERROR"; //var for error handling
export const GET_APP_TOUR_BEGIN = "GET_APP_TOUR_BEGIN";
export const GET_APP_TOUR_SUCCESS = "GET_APP_TOUR_SUCCESS";
export const GET_APP_TOUR_ERROR = "GET_APP_TOUR_ERROR";
//These action are responsible for taking the tour from tour_context and loads them into filter_context
export const LOAD_TOURS = "LOAD_TOURS";
export const SET_GRIDVIEW = "SET_GRIDVIEW";
export const SET_LISTVIEW = "SET_LISTVIEW";
export const UPDATE_SORT = "UPDATE_SORT";
export const SORT_TOURS = "SORT_TOURS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const FILTER_TOURS = "FILTER_TOURS";
//These actions are responsible for all the calculations / states of the cart totals
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const CALCULATE_DISC = "CALCULATE_DISC";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";
export const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";
