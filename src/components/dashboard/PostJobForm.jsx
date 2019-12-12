import React from "react";
import { connect } from "react-redux";
import {
  handleChange,
  handleDateChange,
  doSubmit
} from "../../store/actions/JobFormAction";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, Icon } from "semantic-ui-react";
import RenderInput from "../common/RenderInput";

const PostJobForm = props => {
  let { auth, job, handleChange, handleDateChange, doSubmit } = props;
  let {
    finishDate,
    shortDescription,
    description,
    attachments,
    freelancer
  } = job;
  const enableButton = () => {
    if (description && shortDescription) {
      return (
        <Button inverted icon labelPosition="right" size="large" color="red">
          Post
          <Icon name="right arrow" />
        </Button>
      );
    } else {
      return (
        <Button
          inverted
          icon
          labelPosition="right"
          size="large"
          color="red"
          disabled
        >
          Post
          <Icon name="right arrow" />
        </Button>
      );
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div>
      <Form onSubmit={doSubmit} className="job-form">
        <Form.Group widths="two">
          <RenderInput
            type="text"
            id="shortDescription"
            name="shortDescription"
            onChange={handleChange}
            value={shortDescription}
            placeholder="Short description"
          ></RenderInput>

          <DatePicker
            todayButton="Today"
            isClearable
            selected={finishDate}
            onChange={date => handleDateChange(date)}
            placeholderText="Choose a date"
          />
        </Form.Group>
        <Form.TextArea
          id="description"
          placeholder="Tell us more about the job..."
          name="description"
          onChange={handleChange}
          value={description}
        />
        <Form.Group widths="two">
          <RenderInput
            type="text"
            id="attachments"
            name="attachments"
            onChange={handleChange}
            value={attachments}
            placeholder="Attachments"
          ></RenderInput>
          <RenderInput
            type="text"
            id="freelancer"
            name="freelancer"
            onChange={handleChange}
            value={freelancer}
            placeholder="Choose a lancer"
          ></RenderInput>
        </Form.Group>

        {enableButton()}
      </Form>

      <style jsx>
        {`
          .job-form {
            margin: 10% auto;
            width: 50%;
          }
        `}
      </style>
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth, job: state.job };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(handleChange(e)),
    handleDateChange: date => dispatch(handleDateChange(date)),
    doSubmit: e => dispatch(doSubmit(e))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostJobForm);
