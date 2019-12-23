import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import JobCard from "./JobCard";

import "./styles.css";
const JobsPostedByMe = ({ jobs, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  const isLoading = () => {
    if (!jobs || jobs.length === 0) {
      return <div>You have not posted any job, create a job</div>;
    } else {
      // sort based on the created time
      // jobs.sort(function(a, b) {
      //   return b.createdAt.seconds - a.createdAt.seconds;
      // });

      return jobs.map(job => {
        return auth.uid === job.userId ? (
          <div className="" key={job.id}>
            <JobCard
              jobId={job.id}
              shortDescription={job.shortDescription}
              description={job.description}
              finishDate={job.finishDate}
              attachments={job.attachments}
              freelancers={job.freelancers}
              createdAt={job.createdAt}
              key={job.id}
            />
          </div>
        ) : (
          <div>You have not posted any job, create a job</div>
        );
      });
    }
  };

  return (
    <div>
      <div className="my-jobs">{isLoading()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.firestore.ordered.jobs,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobsPostedByMe);
