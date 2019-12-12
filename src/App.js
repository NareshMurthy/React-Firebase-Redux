import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
// import Footer from "./components/layout/Footer";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/common/notfound";
import JobDetails from "./components/dashboard/JobDetails";

import PaymentForm from "./components/dashboard/PaymentForm";
import PostNewJob from "./components/dashboard/PostNewJob";

function App() {
  return (
    <div>
      <Navbar className="navbar" />
      <Switch className="app">
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/postjob" component={PostNewJob} />
        <Route exact path="/jobs/:id" component={JobDetails} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/notfound" component={NotFound} />
      </Switch>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
        * {
          font-family: "Nunito", sans-serif;
          padding: 0;
          margin: 0;
          outline: none !important;
        }
        a {
          text-decoration: none;
        }

        a:hover {
          cursor: pointer;
        }

        input:focus {
          outline: none;
        }
      `}</style>
      <style jsx>{`
        .navbar {
          height: 8vh;
        }
        .app {
          height: 92vh;
        }
      `}</style>
    </div>
  );
}

export default App;
