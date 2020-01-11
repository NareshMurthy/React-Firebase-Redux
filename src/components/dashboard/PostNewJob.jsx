import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PostJobForm from "./PostJobForm";
import "./styles.css";
const PostNewJob = props => {
  let { auth, job } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  return <PostJobForm></PostJobForm>;
};
const mapStateToProps = state => {
  return { auth: state.firebase.auth, job: state.job };
};

export default connect(mapStateToProps)(PostNewJob);
