import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Button, Message, Icon } from "semantic-ui-react";
import handleInputChange from "./../common/handleInputChange";

import { NavLink } from "react-router-dom";

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
      <form className=" form-group" onSubmit={doSubmit}>
        <div className="text-center mb-4">
          <Icon
            className="mb-3 mt-3"
            color="teal"
            size="massive"
            name="unlock"
          ></Icon>
          <h1 className="h3 mb-3 font-weight-normal">Log-in to your account</h1>
          <p>
            Build form controls with floating labels via the{" "}
            <code>:placeholder-shown</code> pseudo-element.{" "}
          </p>
        </div>
        <input
          autoComplete="fname"
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          placeholder="First Name"
          required
          className="form-control mb-3"
          value={state.firstName}
          autoFocus
          // error={errors.firstName}
        />
        <input
          id="lastName"
          name="lastName"
          required
          type="text"
          autoComplete="lname"
          placeholder="Last Name"
          onChange={handleChange}
          value={state.lastName}
          className="form-control mb-3"
        />

        <input
          type="email"
          className="form-control mb-3"
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
          className="form-control mb-3"
          placeholder="Password"
          required
          value={state.password}
          onChange={handleChange}
          // error={state.errors.password}
          name="password"
        />
      </form>
      <Button animated fluid size="large" color="teal" className="mb-3">
        <Button.Content visible>Signup</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>

      <div className="form-group ">{authError ? <p>{authError}</p> : null}</div>

      <Message warning>
        Already have an account?
        <NavLink to="/signin" variant="body2">
          Sign in
        </NavLink>
      </Message>
      <style jsx>{`
        .signup {
          margin: auto;
          width: 30%;
        }

        @media screen and (max-width: 600px) {
          .signup {
            width: 50%;
          }
        }
      `}</style>
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
