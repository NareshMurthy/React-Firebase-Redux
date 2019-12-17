import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";
import { Dropdown, Menu } from "semantic-ui-react";
const SignOutLinks = props => {
  return (
    <React.Fragment>
      <NavLink to="/postjob">
        <Menu.Item>Post a Job</Menu.Item>
      </NavLink>

      <NavLink to="/temp">
        <Menu.Item> Become a FL</Menu.Item>
      </NavLink>

      <a onClick={props.signOut}>
        <Menu.Item>Logout</Menu.Item>
      </a>

      <Dropdown item simple text={props.profile.initials}>
        <Dropdown.Menu>
          <NavLink to="/myjobs">
            <Dropdown.Item style={{ color: "black" }}>My Jobs</Dropdown.Item>
          </NavLink>

          <NavLink to="/userprofile">
            <Dropdown.Item style={{ color: "black" }}>
              {props.profile.initials}
            </Dropdown.Item>
          </NavLink>

          <Dropdown.Divider />
          <Dropdown.Header>Settings</Dropdown.Header>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
