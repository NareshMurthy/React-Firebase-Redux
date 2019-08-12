import React from "react";

import { Link, NavLink } from "react-router-dom";

const SignInLinks = () => {
  return (
    <ul className="navbar-nav mr-5 ">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/signin">
          Login
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLinks;
