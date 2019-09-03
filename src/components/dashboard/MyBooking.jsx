import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import BookingCard from "./BookingCard";

const MyBooking = ({ bookings, auth }, props) => {
  return (
    <Container>
      <div className="my-bookings">
        {bookings &&
          bookings.map(booking => {
            if (auth.uid === booking.userId) {
              return (
                <div className="mt-5">
                  <BookingCard
                    bookingId={booking.id}
                    location={booking.location}
                    course={booking.course}
                    date={booking.date}
                    createdAt={booking.createdAt}
                    key={booking.id}
                  />
                </div>
              );
            }
          })}
      </div>
    </Container>
  );
};

export default MyBooking;
