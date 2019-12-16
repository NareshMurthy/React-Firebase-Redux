import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import FreeLancers from "./FreeLancers";
const Dashboard = props => {
  const { auth, freelancers } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard">
      <FreeLancers freelancers={freelancers} auth={auth}></FreeLancers>

      <style jsx>{`
        .dashboard {
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
