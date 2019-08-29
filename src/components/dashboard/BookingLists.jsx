import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BookingLists = props => {
  console.log(props.date.seconds);
  return (
    <div className="ui card">
      <div className="content">
        <div className="center aligned header">{props.course}</div>
        <div className="center aligned description">
          <p>Jenny is a student studying Media Management at the New School</p>
        </div>
      </div>
      <div className="extra content">
        <div className="author">
          By{"    "}
          <img
            className="ui avatar image"
            src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
          />
          coolguy {moment.unix(props.createdAt.seconds).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default BookingLists;
