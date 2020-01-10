import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PostJobForm from "./PostJobForm";
import { TabsContainer, Tabs, Tab } from "react-md";
import "./styles.css";
import PaymentForm from "./PaymentForm";
const PostNewJob = props => {
  let steps = [
    {
      title: "Details",
      page: <PostJobForm></PostJobForm>
    },
    {
      title: "Billing",
      page: <PaymentForm></PaymentForm>
    },
    {
      title: "Confirm Order",
      page: <div>Success</div>
    }
  ];
  let { auth, job } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  const renderStep = () => {
    return steps.map((step, index) => (
      <Tab key={index} label={step.title}>
        {step.page}
      </Tab>
    ));
  };

  return (
    <TabsContainer
      panelClassName="md-grid"
      style={{ borderTop: "1px solid white" }}
    >
      <Tabs
        tabId="simple-tab"
        mobile={true}
        style={{ backgroundColor: "rgb(3, 169, 244)", color: "white" }}
      >
        {renderStep()}
      </Tabs>
    </TabsContainer>
  );
};
const mapStateToProps = state => {
  return { auth: state.firebase.auth, job: state.job };
};

export default connect(mapStateToProps)(PostNewJob);
