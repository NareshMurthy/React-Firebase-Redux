import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const SignInLinks = () => {
  return (
    <ul className="signin-links">
      <NavLink to="/signin">
        <li>Login</li>
      </NavLink>
      <NavLink to="/signup">
        <li>Sign Up</li>
      </NavLink>
    </ul>
  );
};

export default SignInLinks;
