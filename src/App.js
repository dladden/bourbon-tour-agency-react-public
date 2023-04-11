import React from "react"; //adding React functionality into the file from the node_modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import "react-calendar/dist/Calendar.css";
//Importing the pages from index.js this is done so that it can be called in the app when needed
import {
  Home,
  ConfirmationPage,
  CustomConfirmationPage,
  About,
  Cart,
  InfoPage,
  Checkout,
  Contact,
  PrivacyPage,
  Error,
  appTour,
  Tours,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

//Using tag-template-literals with styled-component called button
// const Button = styled.button``;

//Below is the main function (aka stateless functional component) of the React
//As JavaScrip it is main function since it is capitalized and it always must return something like JSX
//The "return <h4></h4>" is called JSX it is the HTML used in the React.js
//Note: that checkout is wrapped into a PrivateRout page.
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/submission-confirmation"
            element={<CustomConfirmationPage />}
          />
          <Route path="/faq" element={<InfoPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<appTour />} />
          <Route
            path="/confirmation"
            element={
              <PrivateRoute>
                <ConfirmationPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
