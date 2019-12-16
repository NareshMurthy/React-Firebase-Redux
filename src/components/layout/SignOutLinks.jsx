import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";

const SignOutLinks = props => {
  return (
    <ul className="navbar-nav mr-5 ">
      <li className="nav-item ">
        <NavLink className="nav-link " to="/postjob">
          Post a Job
        </NavLink>
      </li>
      <li className="nav-item dropdown initials">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.profile.initials}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className=" dropdown-item" to="/userprofile">
            {props.profile.initials}
          </NavLink>
          <NavLink className=" dropdown-item" to="/myjobs">
            My Jobs
          </NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/temp">
          Become a FL
        </NavLink>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={props.signOut}>
          Logout
        </a>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
