import React, { useState } from "react";
import { connect } from "react-redux";
import { createBooking } from "../../store/actions/bookingActions";
import { Redirect } from "react-router-dom";
import RenderSelect from "./../common/RenderSelect";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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

  // </div><div className="date-timepickers"></div>
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={doSubmit}>
          <Grid container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              <RenderSelect
                id="course"
                options={courseOptions}
                onChange={handleSelectChange}
                name="course"
                value={state.course}
              ></RenderSelect>
            </Grid>
            <Grid item xs={12}>
              <RenderSelect
                id="location"
                options={locationOptions}
                onChange={handleSelectChange}
                name="location"
                value={state.location}
              ></RenderSelect>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Book
            </Button>
          </Grid>
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
