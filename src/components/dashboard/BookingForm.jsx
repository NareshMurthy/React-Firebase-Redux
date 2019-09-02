import React, { useState } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookingActions";
import { Redirect } from "react-router-dom";
import RenderSelect from "./../common/RenderSelect";

// date and time imports

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));
const BookingForm = props => {
  const initialState = {
    date: new Date(),
    location: "",
    course: ""
  };

  // call styles hook
  const classes = useStyles();

  const [state, setState] = useState(initialState);

  const handleDateChange = date => {
    setState({
      date: date
    });
  };

  const handleSelectChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };
  const doSubmit = e => {
    e.preventDefault();
    props.createBooking(state);
  };

  const { auth } = props;
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
    <form className={classes.form} onSubmit={doSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={state.date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={state.date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <RenderSelect
        id="course"
        options={courseOptions}
        onChange={handleSelectChange}
        name="course"
        value={state.course}
      ></RenderSelect>
      <RenderSelect
        id="location"
        options={locationOptions}
        onChange={handleSelectChange}
        name="location"
        value={state.location}
      ></RenderSelect>
      <button className="btn btn-danger mt-4">Book</button>
    </form>
  );
};

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
