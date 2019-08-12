import React, { Component } from "react";

import { connect } from "react-redux";
import { signUp } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    lastName: "",
    firstName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  doSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container signup-div">
        <div className=" signup-div">
          <form onSubmit={this.doSubmit} className="col s12">
            <div className="row">
              <div className="form-group col s12 md-form">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col s12 md-form">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col s6 md-form">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col s6 md-form">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group ">
              <button className="btn  btn-danger">Sign Up</button>
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
