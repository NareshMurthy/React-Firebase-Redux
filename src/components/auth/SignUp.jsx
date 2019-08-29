import React, { Component } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import RenderInput from "../common/RenderInput";
import formValidation from "../common/FormValidaton";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
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
      case "lastName":
        errors.lastName = errors.lastName = formValidation(id, value)
          ? ""
          : "Enter a valid last name";
        break;
      case "firstName":
        errors.firstName = errors.firstName = formValidation(id, value)
          ? ""
          : "Enter a valid first name";
        break;
      default:
        break;
    }
    this.setState({ errors: errors, [id]: value });
  };

  doSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    const { errors } = this.state;
    return (
      <div className="container">
        <div className=" signup-div">
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

            <div className="two fields">
              <RenderInput
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
                error={errors.firstName}
              ></RenderInput>
              <RenderInput
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
                error={errors.lastName}
              ></RenderInput>
            </div>
            <div className="form-group ">
              <button
                className="btn btn-danger"
                disabled={this.state.isDisabled}
              >
                Sign Up
              </button>
            </div>
            <div className="form-group ">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

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
