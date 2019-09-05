import React from "react";

import Container from "@material-ui/core/Container";

import BookingCard from "./BookingCard";

const MyBooking = ({ bookings, auth }, props) => {
  const isLoading = () => {
    if (!bookings || bookings.length === 0) {
      return <div>No bookings available...</div>;
    } else {
      console.log(bookings);
      // sort based on the created time
      bookings.sort(function(a, b) {
        return b.createdAt.seconds - a.createdAt.seconds;
      });

      return bookings.map(booking => {
        return auth.uid === booking.userId ? (
          <div className="mt-3 mb-2" key={booking.id}>
            <BookingCard
              bookingId={booking.id}
              location={booking.location}
              course={booking.course}
              date={booking.date}
              createdAt={booking.createdAt}
              key={booking.id}
            />
          </div>
        ) : (
          <div>You have not booked any events</div>
        );
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
