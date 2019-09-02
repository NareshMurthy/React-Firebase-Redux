import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
const BookingDetails = ({ booking, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  if (booking) {
    return <div>{booking.course}</div>;
  }
  return <div>Loading...</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const bookings = state.firestore.data.bookings;
  const booking = bookings ? bookings[id] : null;
  return {
    booking: booking,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bookings" }])
)(BookingDetails);
