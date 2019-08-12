import React, { Component } from "react";
import { Link } from "react-router-dom";
// {moment(props.date.toDate()).calendar()}
import moment from "moment";

const BookingLists = props => {
  return (
    <div
      className="card text-white bg-dark mb-2"
      style={{ width: "13rem", height: "7rem" }}
    >
      <div className="card-header">date</div>
      <Link to={"/booking/" + props.bookingId}>
        <h3 className="card-title booking-cards">{props.course}</h3>
      </Link>
    </div>
  );
};

export default BookingLists;
