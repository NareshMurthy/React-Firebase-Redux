import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const SignInLinks = () => {
  return (
    <React.Fragment>
      <ul>
        <NavLink to="/signin">
          <li>Login</li>
        </NavLink>
        <NavLink to="/signup">
          <li>Sign Up</li>
        </NavLink>
      </ul>
    </React.Fragment>
  );
};

export default SignInLinks;
