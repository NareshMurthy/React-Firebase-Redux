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
      <form autoComplete="off" onSubmit={doSubmit}>
        <div className=" mb-4">
          <h1 className=" mt-5 mb-2">
            We are <span>Lorem Ipsum</span>
          </h1>

          <h3 className="mb-3 font-weight-normal">
            Log-in to your account to do this this that
          </h3>
        </div>

        <div className="mb-3">
          {/* <label htmlFor="email">Email address</label> */}
          <input
            type="email"
            // className="form-control"
            required
            autoFocus
            onChange={handleChange}
            // error={state.errors.email}
            id="email"
            name="email"
            placeholder="Username"
            value={state.email}
          />
        </div>

        <div className="  mb-3">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            // className="form-control"
            placeholder="Password"
            required
            value={state.password}
            onChange={handleChange}
            // error={state.errors.password}
            name="password"
          />
        </div>

        <button>
          <span>Login</span>
          <Icon
            style={{ color: "rgb(254, 190, 126)" }}
            name="angle double right"
          ></Icon>
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
