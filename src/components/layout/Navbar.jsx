import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import "./styles.css";
// import logo from "../../assets/logo.svg";
import { Icon } from "semantic-ui-react";

const Navbar = props => {
  const { auth, profile, width } = props;
  const links = auth.uid ? <SignOutLinks profile={profile} /> : <SignInLinks />;

  let initialState = { height: "7vh" };
  const [state, setState] = useState(initialState);

  const expandNavbar = () => {
    state.height === "7vh"
      ? auth.uid
        ? setState({ height: "37vh" })
        : setState({ height: "23vh" })
      : setState({ height: "7vh" });
  };

  const renderNavbar = () => {
    return width > 800 ? (
      <div className="sticky-top">
        <NavLink to="/">
          <h4>Get It Done</h4>
        </NavLink>
        {links}
      </div>
    ) : (
      <div className="sticky-top" style={{ ...state }}>
        <div className="header">
          <Icon name="bars" onClick={expandNavbar}></Icon>
          <h3>Get It Done</h3>
        </div>
        <div className="mobile-nav" onClick={expandNavbar}>
          {links}
        </div>
      </div>
    );
  };

  return renderNavbar();
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
