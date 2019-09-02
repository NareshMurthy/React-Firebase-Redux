export const createBooking = booking => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call to db
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("bookings")
      .add({
        ...booking,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_BOOKING", booking });
      })
      .catch(err => {
        dispatch({ type: "ADD_BOOKING_ERROR", err });
      });
  };
};
