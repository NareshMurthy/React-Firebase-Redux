import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Icon,
  Segment
} from "semantic-ui-react";
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
  if (auth.uid) return <Redirect to="/" />;

  const { errors } = state;
  return (
    <Grid textAlign="center" style={{ height: "92vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create a account
        </Header>
        <Form size="large" onSubmit={doSubmit}>
          <Segment stacked>
            <Form.Input
              autoComplete="fname"
              name="firstName"
              fluid
              id="firstName"
              onChange={handleChange}
              placeholder="First Name"
              // error={errors.firstName}
            ></Form.Input>

            <Form.Input
              id="lastName"
              name="lastName"
              fluid
              autoComplete="lname"
              placeholder="Last Name"
              onChange={handleChange}
              // error={errors.lastName}
            ></Form.Input>
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
              placeholder="Password"
              autoComplete="current-password"
            />

            <Button animated fluid size="large" color="teal">
              <Button.Content visible>Signup</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Segment>
          <div className="form-group ">
            {authError ? <p>{authError}</p> : null}
          </div>
        </Form>
        <Message warning>
          Already have an account?
          <NavLink to="/signin" variant="body2">
            Sign in
          </NavLink>
        </Message>
      </Grid.Column>
    </Grid>
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
