import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

import logo from "../../assets/logo.svg";

const Navbar = props => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignOutLinks profile={profile} /> : <SignInLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-danger">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="companylogo" width="30px" height="30px"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto" />
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
