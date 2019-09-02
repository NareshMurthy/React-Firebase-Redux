import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";

import { makeStyles } from "@material-ui/core/styles";

import { blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: blue[500]
  }
}));

const SignOutLinks = props => {
  console.log(props.profile);
  const classes = useStyles();
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
