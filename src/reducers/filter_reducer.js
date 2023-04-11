import {
  LOAD_TOURS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  SORT_TOURS,
  FILTER_TOURS,
} from "../actions";
//HOOKS can only be invoked in another hook or in react component
//This filter reducer is a simple function responsible for filtering functionality

//if load_tours change state values using the spread operator to copy values "data"
//return: all_tours - an array which alway returns original array with all the data
//filtered_tours - state value used to take a copy of data array and manipulate it for filtering
const filter_reducer = (state, action) => {
  if (action.type === LOAD_TOURS) {
    //getting the max price of a tour for the pricing filter coming from action.payload
    let maxPrice = action.payload.map((tour) => tour.price);
    //using math package to get the max price
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_tours: [...action.payload],
      filtered_tours: [...action.payload],
      //filters object bring all the initial values with state.filters
      //it sets max_price equal to maxPrice with "max_price: maxPrice"
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  //GRID-VIEW
  //This if statements set the views: GridView
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  //This if statements set the views: ListView
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  } //END GRIDVIEW

  //This if sets the reducers state to match the value select in the
  //sort option (by default set to sort ALL)
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  //SORT PORTION
  if (action.type === SORT_TOURS) {
    const { sort, filtered_tours } = state;
    let tempTours = [...filtered_tours]; //making sure array is not empty
    if (sort === "all") {
      tempTours = tempTours.sort((x, y) => y.price - x.price);
    }

    if (sort === "best-sell") {
      //sort function with access to x=current item and y = next item
      //this sort function works by comparison
      tempTours = tempTours.filter((tour) => tour.best_sell === true);
    }

    if (sort === "price-lowest") {
      //sort function with access to x=current item and y = next item
      //this sort function works by comparison
      tempTours = tempTours.sort((x, y) => x.price - y.price);
    }
    if (sort === "price-highest") {
      //expanded logic for sorting
      tempTours = tempTours.sort((x, y) => {
        if (x.price < y.price) {
          return -1; //then sort one behind the stack
        }
        if (x.price > y.price) {
          return 1; //then sort one on top of the stack
        }
        return 0;
      });
    }
    if (sort === "name-highest") {
      tempTours = tempTours.sort((x, y) => {
        return x.name.localeCompare(y.name);
      });
    }
    if (sort === "name-lowest") {
      tempTours = tempTours.sort((x, y) => {
        return y.name.localeCompare(x.name);
      });
    }
    return { ...state, filtered_tours: tempTours };
  } //END SORT PORTION

  //UPDATE FILTERS is an object it uses dynamic properties
  //[name] - accessing the name value and set it qual to the value
  //[name] - this means that on change value typed is stored in value (dynamically)
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  } //END UPDATE FILTERS

  //FILTERS TOURS filtering logic is handled here
  if (action.type === FILTER_TOURS) {
    const { all_tours } = state;
    const { search_text, category, distillery, price, special_res } =
      state.filters;
    let tempTours = [...all_tours]; //using all tours for filtering and as default when no if-statements hit
    //(value overwritten in every if-statement)

    if (search_text) {
      tempTours = tempTours.filter((tour) => {
        return tour.name.toLowerCase().startsWith(search_text);
      }); //if search triggered store new value matched with search_text
      // and push it to filtered_tours with "filtered_tours: tempTours"
    } //end if search_text

    if (category !== "all") {
      tempTours = tempTours.filter((tour) => tour.category === category);
    } //if not "all" then filter when chosen category matches the category data in the tour 'tour.category'

    if (distillery !== "all") {
      tempTours = tempTours.filter((tour) => {
        return tour.dist.find((d) => d === distillery);
      });
    } //if not "all" filter using find method on arrays dist 'd' and match distillery value chosen

    tempTours = tempTours.filter((tour) => tour.price <= price);

    if (special_res) {
      tempTours = tempTours.filter((tour) => tour.spec_res === true);
    } //if special_res checked filter only when spec_res is true in the data set

    return { ...state, filtered_tours: tempTours }; //IMPORTANT: filtered-tours returned as the new tempTours
  }
  //Clear filters action: if equal CLEAR_FILTERS set default values while setting price to max
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        search_text: "",
        category: "all",
        distillery: "all",
        transport: "all",
        price: state.filters.max_price, //accessing max price through state
        special_res: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
