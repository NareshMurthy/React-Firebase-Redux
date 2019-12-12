import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Step, Icon } from "semantic-ui-react";
import PostJobForm from "./PostJobForm";

import PaymentForm from "./PaymentForm";
const PostNewJob = props => {
  const initialState = {
    steps: [
      {
        title: "Details",
        icon: "briefcase",
        description: "Enter Job information",
        active: true,
        page: "postjob"
      },
      {
        title: "Billing",
        icon: "payment",
        description: "Enter billing information",
        active: false,
        page: "payment"
      },
      {
        title: "Confirm Order",
        icon: "info",
        description: "Verify order details",
        active: false,
        page: "confirm-order"
      }
    ]
  };
  const [state, setState] = useState(initialState);
  let { auth, job } = props;
  let { steps } = state;
  console.log(job.renderPaymentPage);
  if (!auth.uid) return <Redirect to="/signin" />;

  const renderForm = () => {
    // let activeStep = steps.filter(step => step.active);

    // let newState = { ...state };
    // newState.steps[1].active = true;
    // setState(newState);
    if (job.renderPaymentPage) {
      return <PaymentForm></PaymentForm>;
    } else {
      return <PostJobForm></PostJobForm>;
    }
  };

  const renderStep = () => {
    return steps.map(step => (
      <Step active={step.active}>
        <Icon name={step.icon} />
        <Step.Content>
          <Step.Title>{step.title}</Step.Title>
          <Step.Description>{step.description}</Step.Description>
        </Step.Content>
      </Step>
    ));
  };

  return (
    <div>
      <div className="step">
        <Step.Group unstackable size="mini">
          {renderStep()}
        </Step.Group>
        {renderForm()}
      </div>

      <style jsx>
        {`
          .step {
            margin: 1%;
          }
        `}
      </style>
    </div>
  );
};
const mapStateToProps = state => {
  return { auth: state.firebase.auth, job: state.job };
};

export default connect(mapStateToProps)(PostNewJob);
