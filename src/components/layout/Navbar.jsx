import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import "./styles.css";
// import logo from "../../assets/logo.svg";
import { Container, Menu, Dropdown } from "semantic-ui-react";

const Navbar = props => {
  const { auth, profile, width } = props;
  const links = auth.uid ? <SignOutLinks profile={profile} /> : <SignInLinks />;
  const renderNavbar = () => {
    return width > 800 ? (
      <div className="sticky-top">
        <NavLink to="/">
          <h4>Get It Done</h4>
        </NavLink>
        {links}
      </div>
    ) : (
      <Menu className="sticky-top" inverted>
        <Dropdown
          item
          simple
          text="Get It Done"
          inverted
          className="mobile-navbar"
        >
          <Dropdown.Menu>
            <NavLink to="/">
              <Dropdown.Item>Home</Dropdown.Item>
            </NavLink>
            {links}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
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
