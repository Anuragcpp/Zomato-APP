import "./styles.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import ListingPage from "./Listing/ListingPage";
import RestaurantPage from "./RestaurantPage/RestPage";
import PlaceOrder from "./Orders/PlaceOrder";
import ViewOrder from "./Orders/ViewOrder";
function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route path="/listing/:mealType" component={ListingPage}></Route>
      <Route path="/restpage/:restid" component={RestaurantPage}></Route>
      <Route path="/placeOrder/:restName" component={PlaceOrder} />
      <Route path="/viewBooking" component={ViewOrder} />
      <Footer />
    </>
  );
}
export default App;
