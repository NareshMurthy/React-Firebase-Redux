import React from "react";
import { connect } from "react-redux";
import {
  handleChange,
  handleDateChange,
  doSubmit
} from "../../store/actions/JobFormAction";
import { Redirect } from "react-router-dom";
import "./styles.css";
import { TextField, Snackbar, Button, DatePicker } from "react-md";
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
        <Button raised primary className="mt-4 ml-2">
          Post
        </Button>
      );
    } else {
      return (
        <Button raised primary disabled className="mt-4 ml-2">
          Post
        </Button>
      );
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!state.toasts.length) {
  //     const toasts = state.toasts.slice();
  //     toasts.push({
  //       text: 'Submitted new application',
  //       action: 'Neat!',
  //     });
  //     setState({ toasts });
  //   }
  // };

  // const handleDismiss = () => {
  //   const [ ...toasts] = state.toasts;
  //   setState({ toasts });
  // };

  return (
    <div className="job-form">
      <form onSubmit={doSubmit} className=" md-grid">
        <TextField
          type="text"
          id="shortDescription"
          name="shortDescription"
          onChange={(value, e) => handleChange(e)}
          label="Short description"
          value={shortDescription}
          lineDirection="center"
          placeholder="Short description"
          className="md-cell md-cell--bottom"
        />

        <DatePicker
          id="end-date-auto"
          label="Select an end date"
          className="md-cell"
          onChange={date => handleDateChange(date)}
          value={finishDate}
        />

        <TextField
          id="description"
          name="description"
          placeholder="Tell us more about the job..."
          label="Tell us more about the job..."
          rows="3"
          onChange={(value, e) => handleChange(e)}
          value={description}
        />

        <TextField
          type="text"
          id="attachments"
          name="attachments"
          onChange={(value, e) => handleChange(e)}
          label="Attachments"
          value={attachments}
          placeholder="Attachments"
          lineDirection="center"
          className="md-cell md-cell--bottom"
        />

        <TextField
          type="text"
          id="freelancer"
          name="freelancer"
          onChange={(value, e) => handleChange(e)}
          label="Choose a lancer"
          value={freelancer}
          placeholder="Choose a lancer"
          lineDirection="center"
          className="md-cell md-cell--bottom"
        />
      </form>
      {enableButton()}
      {/* <Snackbar id="application-toasts" toasts={toasts} onDismiss={handleDismiss} /> */}
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
