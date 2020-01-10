import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCn6WdxurK7R_i3guWpdHwb8hFxwLfaFqA",
  authDomain: "react-redux-firebase-1994.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-1994.firebaseio.com",
  projectId: "react-redux-firebase-1994",
  storageBucket: "react-redux-firebase-1994.appspot.com",
  messagingSenderId: "247106159385",
  appId: "1:247106159385:web:a923d2e4f906b88e"
};
// Initialize Firebase
const settings = {};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

// Create a storage reference from our storage service
export const storageRef = firebase.storage().ref();
export default firebase;
