import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";
import handleInputChange from "./../common/handleInputChange";
import { Redirect } from "react-router-dom";

// imports for material Ui
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

const SignIn = props => {
  // call styles hook
  const classes = useStyles();

  // initializestate
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={doSubmit}>
          <RenderInput
            onChange={handleChange}
            error={state.errors.email}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <RenderInput
            onChange={handleChange}
            error={state.errors.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <div className="form-text">
            {authError ? (
              <small className="text-danger">
                Username or password is incorrect
              </small>
            ) : null}
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
