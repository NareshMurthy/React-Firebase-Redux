import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";

import handleInputChange from "./../common/handleInputChange";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import RenderInput from "./../common/RenderInput";

const SignUp = props => {
  const initialState = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    errors: {}
  };

  const [state, setState] = useState(initialState);
  const classes = useStyles();
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={doSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <RenderInput
                autoComplete="fname"
                name="firstName"
                id="firstName"
                label="First Name"
                onChange={handleChange}
                error={errors.firstName}
              ></RenderInput>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RenderInput
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
                error={errors.lastName}
              ></RenderInput>
            </Grid>
            <Grid item xs={12}>
              <RenderInput
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <RenderInput
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="form-group ">{authError ? <p>{authError}</p> : null}</div>
    </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
