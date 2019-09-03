import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/layout/Footer";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/common/notfound";
import BookingDetails from "./components/dashboard/BookingDetails";
// <Footer />
function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newbooking" component={Dashboard} />
          <Route path="/booking/:id" component={BookingDetails} />
          <Route path="/userprofile" component={UserProfile} />
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/notfound" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
