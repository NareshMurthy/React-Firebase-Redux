import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
const JobDetails = ({ job, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  if (job) {
    return <div>{job.course}</div>;
  }
  return <div>Loading...</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  return {
    job: job,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobDetails);
