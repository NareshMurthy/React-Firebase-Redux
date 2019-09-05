import React, { useState } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookingActions";
import { Redirect } from "react-router-dom";
import RenderSelect from "./../common/RenderSelect";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

// import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./../auth/styles";

// date and time imports
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

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
    let newState = { ...state };
    newState.date = date;
    setState(newState);
  };

  const handleSelectChange = e => {
    let newState = { ...state };
    newState[e.target.name] = e.target.value;
    setState(newState);
  };
  const doSubmit = e => {
    e.preventDefault();
    props.createBooking(state);
    setState(initialState);
  };

  const enableButton = () => {
    if (state.location && state.course) {
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Book
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled
        >
          Book
        </Button>
      );
    }
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={doSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            justifyContent="center"
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Select date"
                  style={{ width: "100%" }}
                  format="MM/dd/yyyy"
                  value={state.date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </div>
              <div>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Select time"
                  style={{ width: "100%" }}
                  value={state.date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
            <div>
              <RenderSelect
                id="course"
                options={courseOptions}
                onChange={handleSelectChange}
                name="course"
                value={state.course}
              ></RenderSelect>
            </div>
            <div>
              <RenderSelect
                id="location"
                options={locationOptions}
                onChange={handleSelectChange}
                name="location"
                value={state.location}
              ></RenderSelect>
            </div>
            <div>{enableButton()}</div>
          </Box>
        </form>
      </div>
    </Container>
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
