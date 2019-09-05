import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { connect } from "react-redux";
import MyBooking from "./MyBooking";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import RenderChip from "./../common/RenderChip";
import AllBookings from "./AllBookings";

const Dashboard = props => {
  const { bookings, auth } = props;

  const initialState = {
    whichEventsToShow: "myevents"
  };
  const [state, setState] = useState(initialState);

  const handleClick = eventType => {
    let newState = { ...state };
    newState.whichEventsToShow = eventType;
    setState(newState);
  };

  const conditionalEvents = () => {
    if (state.whichEventsToShow === "myevents") {
      return <MyBooking bookings={bookings} auth={auth} />;
    } else {
      return <AllBookings bookings={bookings} auth={auth} />;
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard ">
      <div className="dashboard-left container">
        <h5 className="pt-2 font-weight-bolder">Book an event</h5>
        <BookingForm />
      </div>
      <Divider orientation="vertical" className="divider" fullWidth />
      <h4 className="pt-2 font-weight-bolder">
        <RenderChip
          intials="NM"
          className="mychip"
          label="My Events"
          handleClick={() => handleClick("myevents")}
          active={state.whichEventsToShow === "myevents"}
        ></RenderChip>
      </h4>
      <h4 className="pt-2 font-weight-bolder">
        <RenderChip
          label="All Events"
          className="allchip"
          handleClick={() => handleClick("allevents")}
          active={state.whichEventsToShow === "allevents"}
        ></RenderChip>
      </h4>
      <div className="dashboard-right">{conditionalEvents()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookings: state.firestore.ordered.bookings,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bookings" }])
)(Dashboard);
