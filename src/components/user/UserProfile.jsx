import React, { Component } from "react";

class UserProfile extends Component {
  state = {
    email: "",
    password: "",
    phone: "",
    username: "",
    skills: "",
    lastname: "",
    firstname: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  doSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container userprofile-div">
        <div className="username-div">
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
              <div className="form-group col s12  md-form">
                <input
                  type="number"
                  id="phone"
                  placeholder="Phone"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col s12  md-form">
                <input
                  type="text"
                  id="username"
                  placeholder="@Username"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col s12  md-form">
                <input
                  type="text"
                  id="skills"
                  placeholder="Skills"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col s6 md-form">
                <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group col s6 md-form">
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-danger">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
export default UserProfile;
