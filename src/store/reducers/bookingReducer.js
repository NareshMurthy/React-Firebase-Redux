const initState = {
  bookings: [
    {
      id: "1",
      date: "2019-06-12",
      location: "beng",
      course: "node"
    },
    {
      id: "2",
      date: "2019-06-02",
      location: "che",
      course: "js"
    },
    {
      id: "3",
      date: "2019-06-14",
      location: "beng",
      course: "node"
    }
  ]
};
const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      console.log("create booking", action.booking);
      return state;
    case "ADD_BOOKING_ERROR":
      console.log("create booking err", action.err);
      return state;
    default:
      console.log("default case");
      return state;
  }
};
export default bookingReducer;
