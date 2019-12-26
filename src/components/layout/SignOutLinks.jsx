import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";
import { Dropdown, Image } from "semantic-ui-react";
import faker from "faker";
import "./styles.css";

const SignOutLinks = props => {
  const trigger = (
    <span>
      <Image avatar src={faker.internet.avatar()} /> {props.profile.initials}
    </span>
  );

  const options = [
    {
      key: "user",
      text: <NavLink to="/userprofile">{props.profile.initials}</NavLink>,
      icon: "user"
    },
    {
      key: "settings",
      text: <NavLink to="/myjobs">My Jobs</NavLink>,
      icon: "settings"
    },
    {
      key: "sign-out",
      text: <a onClick={props.signOut}>Sign Out</a>,
      icon: "sign out"
    }
  ];

  return (
    <ul>
      <NavLink to="/postjob">
        <li>Post a Job</li>
      </NavLink>

      <NavLink to="/temp">
        <li> Become a FL</li>
      </NavLink>

      <Dropdown
        closeOnEscape
        closeOnBlur
        options={options}
        trigger={trigger}
        icon={null}
      ></Dropdown>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignOutLinks);
