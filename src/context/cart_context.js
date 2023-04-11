import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  CALCULATE_DISC,
  COUNT_CART_TOTALS,
} from "../actions";
//Reducers Specify how the apps state changes in response to action sent to the store.
//It is a function that accepts (state, action) as argument and then returns the next state of the application
//Reducers used in large scale projects to eliminate complexity and bugs.

//function that checks if item cart is in the local storage
//if it exist set the cart equal to it (this is done using Browser API)
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    //if cart exist return parsed to original form and store it
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    //if it doesn't exit return empty array
    return [];
  }
};

//initialState: global variables
//cart - will be a local storage array which is initialized empty
//total_tours - will be total tours added to cart (usually would be one)
//total_amount - is the subtotals added together
//oneSuv_fee - fee for an extra suv
//twoSuv_fee - fee for 2 extra suv's
//van_fee - fee for the van
//bus_fee - fee for the bus
//tax - gst rate of the state in which the business practices
//disc - is the discount offered on the site
const initialState = {
  cart: getLocalStorage(),
  total_tours: 0,
  total_amount: 0,
  discountAmount: 0,
  oneSuv_fee: 19999,
  twoSuv_fee: 39999,
  van_fee: 9999,
  bus_fee: 19999,
  tax: 6,
  disc: 10,
};

const CartContext = React.createContext(); //this initialization of context comes from React

export const CartProvider = ({ children }) => {
  //setting up the reducer: with state function and dispatch function / it passes cart_reducer and initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  //Add To Cart handles the data which will be passed to the cart page using the reducer
  //Expected function values are transportation chosen, total guests
  const addToCart = (date, id, trans, guests, tour) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        date,
        id,
        trans,
        guests,
        tour,
      },
    });
  };

  //TODO: add functionality to remove tour in the cart if id is matched with item in the cart
  const removeTour = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  //TODO: adding the amount of guests in the cart
  const toggleGuest = (id, amount) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, amount } });
  };
  //TODO: functionality to clear the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  //
  const calculateDiscount = () => {
    dispatch({ type: CALCULATE_DISC, payload: { initialState } });
  };

  //useEffect: saving "item" cart in the local storage
  //(only accepts strings) & every-time a change in cart occurs
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS, payload: { initialState } });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeTour,
        toggleGuest,
        clearCart,
        calculateDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
