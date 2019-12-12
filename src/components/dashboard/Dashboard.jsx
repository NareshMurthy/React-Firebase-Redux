import React from "react";
import { connect } from "react-redux";
import JobsPostedByMe from "./JobsPostedByMe";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import FreeLancers from "./FreeLancers";

const Dashboard = props => {
  const { jobs, auth, freelancers } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard ">
      <div className="dashboard-left container">
        <h5 className="pt-2 font-weight-bolder">My jobs</h5>
        <JobsPostedByMe jobs={jobs} auth={auth} />
      </div>

      <div className="dashboard-right">
        <div>
          <FreeLancers freelancers={freelancers} auth={auth}></FreeLancers>
        </div>
      </div>
      <style jsx>{`
        .dashboard-right {
        }

        .dashboard-left {
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.firestore.ordered.jobs,
    freelancers: state.firestore.ordered.freelancers,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "jobs" }]),
  firestoreConnect([{ collection: "freelancers" }])
)(Dashboard);
