import React from "react";

import Container from "@material-ui/core/Container";

import BookingCard from "./BookingCard";

const MyBooking = ({ bookings, auth }, props) => {
  const isLoading = () => {
    if (!bookings) {
      return <div>No bookings...</div>;
    } else {
      bookings.sort(function(a, b) {
        return b.createdAt.seconds - a.createdAt.seconds;
      });

      return bookings.map(booking => {
        if (auth.uid === booking.userId) {
          return (
            <div className="mt-3 mb-2">
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
      });
    }
  };

  return (
    <Container>
      <div className="my-bookings">{isLoading()}</div>
    </Container>
  );
};

export default MyBooking;
