import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";
import handleInputChange from "./../common/handleInputChange";
import { Redirect } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { Button, Icon, Message } from "semantic-ui-react";

import "./styles.css";

const SignIn = props => {
  const initialState = {
    email: "",
    password: "",
    errors: {}
  };

  const [state, setState] = useState(initialState);
  const { authError, auth } = props;

  // function for input change
  const handleChange = e => {
    // console.log(state);
    setState(handleInputChange(e, state));
  };

  // function for page submit
  const doSubmit = e => {
    e.preventDefault();
    console.log(state);
    props.signIn(state);
  };

  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <div className="signin">
      <form className=" form-group" onSubmit={doSubmit}>
        <div className="text-center mb-4">
          <Icon
            className="mb-3 mt-3"
            color="teal"
            size="massive"
            name="unlock"
          ></Icon>

          <h1 className="h3 mb-3 font-weight-normal">Log-in to your account</h1>
        </div>

        <div className="form-label-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            required
            autoFocus
            onChange={handleChange}
            // error={state.errors.email}
            id="email"
            name="email"
            placeholder="Email"
            value={state.email}
          />
        </div>

        <div className="form-label-group  mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
            value={state.password}
            onChange={handleChange}
            // error={state.errors.password}
            name="password"
          />
        </div>

        <Button className="mb-3" animated fluid size="large" color="teal">
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </form>
      <Message warning>
        Don't have an account?
        <NavLink to="/signup" variant="body2">
          Sign Up
        </NavLink>
      </Message>
      <Message warning>
        <NavLink to="/notfound" variant="body2">
          Forgot password?
        </NavLink>
      </Message>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
