import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/layout/Footer";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/common/notfound";
import JobDetails from "./components/dashboard/JobDetails";

import PostNewJob from "./components/dashboard/PostNewJob";
import JobsPostedByMe from "./components/dashboard/JobsPostedByMe";
import LandingPage from "./components/LandingPage/LandingPage";
import "./styles.css";
function App() {
  return (
    <React.Fragment>
      <Navbar className="navbar" />
      <Switch className="app">
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/postjob" component={PostNewJob} />
        <Route exact path="/jobs/:id" component={JobDetails} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/myjobs" component={JobsPostedByMe} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LandingPage} />
        <Redirect to="/notfound" component={NotFound} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
