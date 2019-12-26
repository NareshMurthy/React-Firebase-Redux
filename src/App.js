import React, { useState, useEffect } from "react";
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
  const initialState = { width: window.innerWidth, height: window.innerHeight };
  const [state, setState] = useState(initialState);

  const updateDimensions = () => {
    setState({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <React.Fragment>
      <Navbar className="navbar" width={state.width} />
      <Switch className="app">
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/postjob" component={PostNewJob} />
        <Route exact path="/jobs/:id" component={JobDetails} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/myjobs" component={JobsPostedByMe} />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard width={state.width} />}
        />
        <Route exact path="/" component={LandingPage} />
        <Redirect to="/notfound" component={NotFound} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
