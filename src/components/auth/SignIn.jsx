import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";
import handleInputChange from "./../common/handleInputChange";
import { Redirect } from "react-router-dom";

import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Icon,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
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
    setState(handleInputChange(e, state));
  };

  // function for page submit
  const doSubmit = e => {
    e.preventDefault();
    props.signIn(state);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <Grid textAlign="center" style={{ height: "92vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={doSubmit}>
          <Segment stacked>
            <Form.Input
              onChange={handleChange}
              // error={state.errors.email}
              id="email"
              fluid
              icon="user"
              iconPosition="left"
              name="email"
              autoComplete="email"
              placeholder="Email"
            />
            <Form.Input
              onChange={handleChange}
              // error={state.errors.password}
              icon="lock"
              iconPosition="left"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password"
            />

            <div className="form-text">
              {authError ? (
                <small className="text-danger">
                  Username or password is incorrect
                </small>
              ) : null}
            </div>

            <Button animated fluid size="large" color="teal">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Segment>
        </Form>
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
      </Grid.Column>
    </Grid>
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
