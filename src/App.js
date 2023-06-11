import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem, } from './components';
import ByeAndSell from "./components/ByeAndSell";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import SubCategories from "./SubCategories/SubCategories";
import PlaceAd from "./PlaceAd/PlaceAd";
import AllAd from "./AllAd/AllAd";
import ActiveAd from "./ActiveAd/ActiveAd";
import Bids from "./Bids/Bids";
import ExpiredAd from "./ExpiredAd/ExpiredAd";
import SoldAd from "./SoldAd/SoldAd";
import Payment from "./Payments/Payments";
import Settings from "./Settings/Settings";
import Chat from "./Chat/Chat";
import SavedAds from "./SavedAds/SavedAds";
import SavedSearches from "./SavedSearches/SavedSearches";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Page404 from "./Page404/Page404";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import Subscription from "./Subscription/Subscription";
import ProductPage from "./ProductPage/ProductPage";
import ProductOverview from "./ProductOverview/ProductOverview";
import HomePage5 from "./HomePage5/HomePage5";

function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">

      {/* <Introduction/> */}
      {/* <SubCategories/> */}






      <Header />
      {/* <ByeAndSell/> */}
      {/* <HomePage5/> */}
      {/* <ProductPage /> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <ForgotPassword/> */}
      {/* <ProductOverview/> */}
      <ExpiredAd/>
      <PlaceAd/>
      <Settings/>
      {/* <SavedAds/> */}
      {/* <SavedSearches/> */}
      {/* <Page404/> */}
      {/* <UnderConstruction /> */}
      {/* <Subscription/> */}
      {/* <Landing/> */}










      {/* <AllAd/>   */}
      {/* <ActiveAd/> */}
      {/* <Bids/> */}
      {/* <SoldAd/> */}
      {/* <Payment/> */}
      {/* <Chat/> */}





      {/* <Footer/> */}






    </div>
  );
}

export default App;
