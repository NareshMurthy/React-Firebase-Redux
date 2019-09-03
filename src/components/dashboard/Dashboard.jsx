import React from "react";
import BookingForm from "./BookingForm";
import { connect } from "react-redux";
import MyBooking from "./MyBooking";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Dashboard = props => {
  const { bookings, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard">
      <div className="booking-left">
        <BookingForm />
      </div>
      <div className="booking-right">
        <MyBooking bookings={bookings} auth={auth} />
      </div>
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
