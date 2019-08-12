import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCn6WdxurK7R_i3guWpdHwb8hFxwLfaFqA",
  authDomain: "react-redux-firebase-1994.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-1994.firebaseio.com",
  projectId: "react-redux-firebase-1994",
  storageBucket: "",
  messagingSenderId: "247106159385",
  appId: "1:247106159385:web:a923d2e4f906b88e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
