import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

// import logo from "../../assets/logo.svg";
import { Container, Menu } from "semantic-ui-react";
const Navbar = props => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignOutLinks profile={profile} /> : <SignInLinks />;
  return (
    <React.Fragment>
      <Menu className="sticky-top" inverted stackable>
        <Container>
          <NavLink to="/">
            <Menu.Item>Get It Done</Menu.Item>
          </NavLink>
          {links}
        </Container>
      </Menu>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
