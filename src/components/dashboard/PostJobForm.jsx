import React from "react";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";
import {
  handleChange,
  handleDateChange,
  handleSelectChange,
  doSubmit
} from "../../store/actions/JobFormAction";

import { Redirect } from "react-router-dom";
import "./styles.css";
import {
  TextField,
  Button,
  DatePicker,
  SelectField,
  LinearProgress
} from "react-md";
import UploadFile from "../common/UploadFile";
const PostJobForm = props => {
  let {
    auth,
    job,
    handleChange,
    handleDateChange,
    handleSelectChange,
    doSubmit
  } = props;
  let {
    finishDate,
    shortDescription,
    description,
    freelancer,
    showToast
  } = job;

  let statesWithEmpty = ["Naresh", "Navami", "Meme"];

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

  if (!auth.uid) return <Redirect to="/signin" />;

  if (showToast) {
    cogoToast.success("Data successfully added");
  }

  return (
    <div className="job-form">
      <LinearProgress id="query-indeterminate-progress" query value={10} />
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
        <UploadFile></UploadFile>

        <SelectField
          id="freelancer"
          name="freelancer"
          label="Choose a lancer"
          value={freelancer}
          onChange={e => handleSelectChange(e)}
          menuItems={statesWithEmpty}
          itemLabel="name"
          itemValue="abbreviation"
          className="md-cell md-cell--4-tablet md-cell--6"
          helpOnFocus
          helpText="Try selecting an item in the list."
        />
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
    handleSelectChange: e => dispatch(handleSelectChange(e)),
    handleDateChange: date => dispatch(handleDateChange(date)),
    doSubmit: e => dispatch(doSubmit(e))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostJobForm);
