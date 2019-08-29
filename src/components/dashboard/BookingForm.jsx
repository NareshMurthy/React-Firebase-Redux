import React, { Component } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookingActions";
import { Redirect } from "react-router-dom";
import RenderSelect from "./../common/RenderSelect";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

Moment.locale("en");
momentLocalizer();

class BookingForm extends Component {
  state = {
    date: "",
    location: "",
    course: ""
  };

  handleSelectChange = (e, id) => {
    this.setState({
      [id]: e.value
    });
  };
  doSubmit = e => {
    e.preventDefault();
    this.props.createBooking(this.state);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    let locationOptions = [
      { value: "Govt school", label: "Govt school" },
      { value: "some college", label: "some college" },
      { value: "this college", label: "this college" }
    ];
    let courseOptions = [
      { value: "Algorithms", label: "Algorithms" },
      { value: "Data Structs", label: "Data Structs" },
      { value: "Science", label: "Science" }
    ];
    return (
      <form className="ui form" onSubmit={this.doSubmit}>
        <DateTimePicker
          className="mb-4"
          placeholder="Date"
          max={new Date()}
          onChange={value => this.setState({ date: value })}
        />

        <RenderSelect
          id="location"
          options={locationOptions}
          onChange={this.handleSelectChange}
        ></RenderSelect>

        <RenderSelect
          id="course"
          options={courseOptions}
          onChange={this.handleSelectChange}
        ></RenderSelect>

        <button className="btn btn-danger mt-4">Book</button>
      </form>
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
