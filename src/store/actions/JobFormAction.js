import { storageRef } from "../../config/fbConfig";
export const handleChange = e => {
  return dispatch => {
    dispatch({ type: "HANDLE_CHANGE", e });
  };
};

export const handleSelectChange = e => {
  return dispatch => {
    dispatch({ type: "HANDLE_SELECT_CHANGE", e });
  };
};

export const handleDateChange = date => {
  return dispatch => {
    dispatch({ type: "HANDLE_DATE_CHANGE", date });
  };
};

export const doSubmit = e => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call firestore
    // upload the attachment
    // also get the file url and add in the doc
    e.preventDefault();
    let formData = new FormData(e.target);
    let file = formData.get("file");

    storageRef
      .child("files/" + file.name)
      .put(file)
      .then(snapshot => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        let job = Object.assign({}, { ...getState().job });

        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          firestore
            .collection("jobs")
            .add({
              ...job,
              attachmentURL: downloadURL,
              userId: userId,
              createdAt: new Date()
            })
            .then(() => {
              dispatch({ type: "DO_SUBMIT", e });
            })
            .catch(err => {
              dispatch({ type: "ADD_JOB_ERROR", err });
            });
        });
      });
  };
};
