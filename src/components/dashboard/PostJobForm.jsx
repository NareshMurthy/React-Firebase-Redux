import React from "react";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";
import {
  handleChange,
  handleDateChange,
  handleSelectChange,
  doSubmit
} from "../../store/actions/JobFormAction";

import { Redirect } from "react-router-dom";
import "./styles.css";
import { TextField, Button, DatePicker, SelectField, Snackbar } from "react-md";
import UploadFile from "../common/UploadFile";
import Spinner from "../common/Spinner";
const PostJobForm = props => {
  console.log(props);
  const { promiseInProgress } = usePromiseTracker();
  let {
    auth,
    state,
    handleChange,
    handleDateChange,
    handleSelectChange,
    doSubmit
  } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  let { finishDate, shortDescription, description, domain } = state.job;

  let toastText = state.toastText;
  let toast = [];
  if (toastText) {
    console.log(toastText);

    let temp = { text: toastText, action: "" };
    toast.push(temp);
  }

  const onDismiss = () => {
    toast.pop();
  };

  let domains = ["IT", "WEB", "DATA SCIENCE"];

  const enableButton = () => {
    if (description && shortDescription) {
      return (
        <Button raised primary className="mt-4 ml-2" type="submit">
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

  return (
    <div className="job-form ">
      {promiseInProgress && <Spinner loading={promiseInProgress}></Spinner>}
      <form onSubmit={e => doSubmit(e)} className=" md-grid">
        <TextField
          type="text"
          id="shortDescription"
          name="shortDescription"
          onChange={(value, e) => handleChange(e)}
          label="Short description"
          value={shortDescription}
          lineDirection="center"
          placeholder="Short description"
          className="md-cell md-cell--8"
        />
        <DatePicker
          id="date-picker-controlled"
          label="Select an end date"
          className="md-cell md-cell--4"
          onChange={date => handleDateChange(date)}
          value={finishDate}
          required
          icon={false}
          errorText="This is required!"
          cancelPrimary={false}
          okPrimary={false}
        />

        <TextField
          id="description"
          name="description"
          placeholder="Tell us more about the job..."
          label="Tell us more about the job..."
          rows="3"
          className="md-cell md-cell--12"
          onChange={(value, e) => handleChange(e)}
          value={description}
        />
        <UploadFile></UploadFile>

        <SelectField
          id="freelancer"
          name="freelancer"
          label="Choose a domain"
          value={domain}
          onChange={e => handleSelectChange(e)}
          menuItems={domains}
          itemLabel="name"
          itemValue="abbreviation"
          className="md-cell md-cell--6"
          helpOnFocus
          helpText="Try selecting an item in the list."
        />
        {enableButton()}
      </form>

      <Snackbar
        id="interactive-snackbar"
        toasts={toast}
        autohide
        onDismiss={onDismiss}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth, state: state.job };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(handleChange(e)),
    handleSelectChange: e => dispatch(handleSelectChange(e)),
    handleDateChange: date => dispatch(handleDateChange(date)),
    doSubmit: e => dispatch(doSubmit(e))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostJobForm);
