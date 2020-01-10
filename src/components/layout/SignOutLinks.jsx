import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";

import "./styles.css";

const SignOutLinks = props => {
  return (
    <ul className="signout-links">
      <NavLink to="/postjob">
        <li>Post a Job</li>
      </NavLink>

      <NavLink to="/temp">
        <li> Become a FL</li>
      </NavLink>

      <NavLink to="/userprofile">
        <li>Profile</li>
      </NavLink>
      <a onClick={props.signOut}>Sign Out</a>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
