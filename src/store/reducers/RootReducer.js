import authReducer from "./authReducer";
import jobFormReducer from "./jobFormReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobFormReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
