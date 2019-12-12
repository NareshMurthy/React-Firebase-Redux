export const handleChange = e => {
  return dispatch => {
    dispatch({ type: "HANDLE_CHANGE", e });
  };
};

export const handleDateChange = date => {
  return dispatch => {
    dispatch({ type: "HANDLE_DATE_CHANGE", date });
  };
};

export const doSubmit = e => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call to db
    const firestore = getFirestore();

    const userId = getState().firebase.auth.uid;
    let job = Object.assign({}, { ...getState().job });
    delete job.renderPaymentPage;
    firestore
      .collection("jobs")
      .add({
        ...job,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "DO_SUBMIT", e });
      })
      .catch(err => {
        dispatch({ type: "ADD_JOB_ERROR", err });
      });
  };
};
