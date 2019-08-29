import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";

import formValidation from "../common/FormValidaton";
import RenderInput from "../common/RenderInput";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  handleChange = e => {
    const { id, value } = e.target;
    let errors = this.state.errors;

    switch (id) {
      case "email":
        errors.email = formValidation(id, value) ? "" : "Enter a valid mail id";
        break;
      case "password":
        errors.password = formValidation(id, value)
          ? ""
          : "Password should be atleast 6 characters";
        break;
      default:
        break;
    }
    console.log(this.state.errors);
    this.setState({ errors: errors, [id]: value });
  };
  doSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    const { errors } = this.state;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container ">
        <div className="signin-div">
          <form onSubmit={this.doSubmit} className="ui form">
            <RenderInput
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              error={errors.email}
            ></RenderInput>

            <RenderInput
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
              error={errors.password}
            ></RenderInput>
            <button type="submit" className="btn btn-danger">
              Log In
            </button>

            <div className="form-text">
              {authError ? (
                <small className="text-danger">
                  Username or password is incorrect
                </small>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

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
