import React, { useState } from "react";

import { TextField, Snackbar, DatePicker } from "react-md";
import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import handleInputChange from "./../common/handleInputChange";

import { NavLink } from "react-router-dom";
import "./styles.css";
const SignUp = props => {
  const initialState = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    errors: {}
  };

  const [state, setState] = useState(initialState);
  const handleChange = e => {
    setState(handleInputChange(e, state));
  };

  const doSubmit = e => {
    e.preventDefault();
    props.signUp(state);
  };

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/dashboard" />;

  const { errors } = state;
  return (
    <div className="signup">
      <form autoComplete="off" onSubmit={doSubmit}>
        <div className="text-center mb-4">
          <h1 className=" mt-5 mb-2">
            We are <span>Lorem Ipsum</span>
          </h1>

          <h3 className="mb-3 font-weight-normal">
            Log-in to your account to do this this that
          </h3>
        </div>

        <TextField
          type="text"
          required
          autoFocus
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={(value, e) => handleChange(e)}
          label="First Name"
          value={state.firstName}
          errorText={errors.firstName}
          lineDirection="center"
          className="md-cell md-cell--12"
        />

        <TextField
          type="text"
          required
          autoFocus
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={(value, e) => handleChange(e)}
          label="Last Name"
          value={state.lastName}
          lineDirection="center"
          className="md-cell md-cell--12"
        />

        <TextField
          type="email"
          required
          id="email"
          name="email"
          placeholder="Username"
          onChange={(value, e) => handleChange(e)}
          label="Email"
          value={state.email}
          lineDirection="center"
          className="md-cell md-cell--12"
        />

        <TextField
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(value, e) => handleChange(e)}
          label="Password"
          value={state.password}
          errorText={errors.password}
          lineDirection="center"
          className="md-cell md-cell--12"
        />
      </form>
      <button className="signup-button mt-4 mb-3">
        <span>Sign Up</span>
        <Icon name="angle double right"></Icon>
      </button>
      <h4>Or login in with</h4>
      <Button.Group widths="3" className="mt-1 mb-3">
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="linkedin" icon="linkedin" />
        <Button circular color="google plus" icon="google plus" />
      </Button.Group>
      <div className="">{authError ? <p>{authError}</p> : null}</div>

      <div className="message">
        <span>Already have an account? </span>
        <NavLink to="/signin" variant="body2">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
