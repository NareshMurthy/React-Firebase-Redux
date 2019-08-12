import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  doSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container signin-div">
        <div className="signin-div">
          <form onSubmit={this.doSubmit} className="col s12">
            <div className="row">
              <div className="form-group col s12 md-form">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="row">
              <div className="form-group  col s12 md-form">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-danger">
              Log In
            </button>
            <div>{authError ? <p>{authError}</p> : null}</div>
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
