import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";

const SignOutLinks = props => {
  return (
    <ul className="navbar-nav mr-5 ">
      <li className="nav-item ">
        <NavLink className="nav-link " to="/newbooking">
          New Booking
        </NavLink>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={props.signOut}>
          Logout
        </a>
      </li>
      <li className="nav-item initials">
        <NavLink className="nav-link " to="/userprofile">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignOutLinks);
