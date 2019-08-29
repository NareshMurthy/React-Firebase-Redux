const initState = {};
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
