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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/newbooking" component={Dashboard} />
        <Route path="/booking/:id" component={BookingDetails} />
        <Route path="/userprofile" component={UserProfile} />
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/notfound" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
