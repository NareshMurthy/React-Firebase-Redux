import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";
import handleInputChange from "./../common/handleInputChange";
import { Redirect } from "react-router-dom";

import { TextField, Snackbar } from "react-md";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

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
      <form autoComplete="off" onSubmit={doSubmit}>
        <div className=" mb-4 mt-5">
          <h1 className="  mb-2">
            We are <span>Lorem Ipsum</span>
          </h1>

          <h3 className="mb-3">Log-in to your account to do this</h3>
        </div>

        <div className="mb-3">
          <TextField
            type="email"
            required
            autoFocus
            id="email"
            name="email"
            placeholder="Username"
            onChange={(value, e) => handleChange(e)}
            label="Email"
            value={state.email}
            lineDirection="center"
            className="md-cell md-cell--12"
          />
        </div>

        <div className="mb-4">
          <TextField
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(value, e) => handleChange(e)}
            label="Password"
            value={state.password}
            lineDirection="center"
            className="md-cell md-cell--12"
          />
        </div>

        <button className="signin-button mb-3">
          <span>Login</span>
          <Icon name="angle double right"></Icon>
        </button>
        <h4>Or login in with</h4>
        <Button.Group widths="3" className="mt-1 mb-3">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </Button.Group>
      </form>
      <div className="message">
        <span>Don't have an account? </span>
        <NavLink to="/signup" variant="body2">
          Create an account
        </NavLink>
      </div>
      <div className="message">
        <NavLink to="/notfound" variant="body2">
          Forgot password?
        </NavLink>
      </div>
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
