import React, { Component } from "react";
import BookingForm from "./BookingForm";
import { connect } from "react-redux";
import MyBooking from "./MyBooking";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    const { bookings, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="booking container">
        <div className="row">
          <div className="col s12 m6">
            <div className="booking-left">
              <BookingForm />
            </div>
          </div>
          <div className="col s12 m6 ">
            <div className="booking-right">
              <MyBooking bookings={bookings} auth={auth} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

// export default connect(mapStateToProps)(Dashboard);
