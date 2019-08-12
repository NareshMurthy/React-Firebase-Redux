import authReducer from "./authReducer";
import bookingReducer from "./bookingReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
