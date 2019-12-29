import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Button, Message, Icon } from "semantic-ui-react";
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
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          placeholder="First Name"
          required
          className="mb-3"
          value={state.firstName}
          autoFocus
          // error={errors.firstName}
        />
        <input
          id="lastName"
          name="lastName"
          required
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={state.lastName}
          className=" mb-3"
        />

        <input
          type="email"
          className="mb-3"
          required
          onChange={handleChange}
          // error={state.errors.email}
          id="email"
          name="email"
          placeholder="Email"
          value={state.email}
        />
        <input
          type="password"
          id="password"
          className=" mb-3"
          placeholder="Password"
          required
          value={state.password}
          onChange={handleChange}
          // error={state.errors.password}
          name="password"
        />
      </form>
      <button className=" mb-3">
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
