//importing the pages for the export
import Home from "./HomePage";
import ConfirmationPage from "./ConfirmationPage";
import CustomConfirmationPage from "./CustomConfirmationPage";
import About from "./AboutPage";
import Cart from "./CartPage";
import InfoPage from "./InfoPage";
import Checkout from "./CheckoutPage";
import Contact from "./ContactPage";
import PrivacyPage from "./PrivacyPage";
import Error from "./ErrorPage";
import SingleTourPage from "./SingleTourPage";
import Tours from "./ToursPage";
import PrivateRoute from "./PrivateRoute"; //preventing users with no profile going to checkout
import AuthWrapper from "./AuthWrapper";

//exporting as name export
export {
  Home,
  ConfirmationPage,
  CustomConfirmationPage,
  About,
  Cart,
  InfoPage,
  Checkout,
  PrivacyPage,
  Contact,
  Error,
  SingleTourPage,
  Tours,
  PrivateRoute,
  AuthWrapper,
};
