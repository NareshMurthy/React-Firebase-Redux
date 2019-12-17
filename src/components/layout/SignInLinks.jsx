import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SignInLinks = () => {
  return (
    <React.Fragment>
      <NavLink to="/signin">
        <Menu.Item>Login</Menu.Item>
      </NavLink>
      <NavLink to="/signup">
        <Menu.Item>Sign Up</Menu.Item>
      </NavLink>
    </React.Fragment>
  );
};

export default SignInLinks;
