import React, { Component } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookingActions";
import { Redirect } from "react-router-dom";
class BookingForm extends Component {
  state = { date: "", location: "", course: "" };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  doSubmit = e => {
    e.preventDefault();
    this.props.createBooking(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.doSubmit}>
          <div className="row">
            <div className="form-group col s12 md-form">
              <input
                id="date"
                type="text"
                placeholder="Date"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col s12 md-form">
              <input
                id="location"
                type="text"
                placeholder="Location"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col s12 md-form">
              <input
                id="course"
                type="text"
                placeholder="Course"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="btn btn-danger">Book</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = dispatch => {
  return { createBooking: booking => dispatch(createBooking(booking)) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
