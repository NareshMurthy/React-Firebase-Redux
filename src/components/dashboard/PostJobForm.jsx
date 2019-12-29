import React from "react";
import { connect } from "react-redux";
import {
  handleChange,
  handleDateChange,
  doSubmit
} from "../../store/actions/JobFormAction";
import { Redirect } from "react-router-dom";
import { DatePicker } from "react-md";
import { Button, Form, Icon } from "semantic-ui-react";
import "./styles.css";
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
        <Button
          className="mt-4"
          icon
          labelPosition="right"
          size="large"
          color="red"
        >
          Post
          <Icon name="right arrow" />
        </Button>
      );
    } else {
      return (
        <Button
          className="mt-4"
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
      <form onSubmit={doSubmit} className="job-form">
        <Form.Group widths="two">
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            onChange={handleChange}
            value={shortDescription}
            placeholder="Short description"
          ></input>

          {/* <DatePicker
            todayButton="Today"
            isClearable
            selected={finishDate}
            onChange={date => handleDateChange(date)}
            placeholderText="Choose a date"
          /> */}
          <DatePicker
            id="appointment-date-auto"
            label="Select an appointment date"
            className="md-cell"
          />
        </Form.Group>
        <textarea
          id="description"
          placeholder="Tell us more about the job..."
          name="description"
          rows="3"
          spellcheck="false"
          onChange={handleChange}
          value={description}
        ></textarea>

        <Form.Group widths="two">
          <input
            type="text"
            id="attachments"
            name="attachments"
            onChange={handleChange}
            value={attachments}
            placeholder="Attachments"
          ></input>
          <input
            type="text"
            id="freelancer"
            name="freelancer"
            onChange={handleChange}
            value={freelancer}
            placeholder="Choose a lancer"
          ></input>
        </Form.Group>

        {enableButton()}
      </form>
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
