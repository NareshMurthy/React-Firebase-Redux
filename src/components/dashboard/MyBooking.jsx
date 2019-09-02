import React from "react";

import BookingCard from "./BookingCard";

const MyBooking = ({ bookings, auth }) => {
  console.log(bookings);
  return (
    <div className="booking-list section">
      {bookings &&
        bookings.map(booking => {
          if (auth.uid === booking.userId) {
            return (
              <div>
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
  );
};

export default MyBooking;
