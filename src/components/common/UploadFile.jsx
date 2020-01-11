import React, { useState } from "react";
import { FileUpload, LinearProgress, TextField } from "react-md";

import "../../globals.css";

const UploadFile = props => {
  let initialState = {
    fileName: "",
    progress: null,
    fileSize: 0
  };

  const [state, setState] = useState(initialState);

  const handleProgress = progress => {
    setState({ progress });
  };

  const handleLoad = ({ name, size }) => {
    setState({ fileName: name, fileSize: size });
  };

  const handleLoadStart = () => {
    setState({ progress: 0 });
  };

  const { fileName, progress } = state;

  let progressBar;
  if (typeof progress === "number") {
    progressBar = (
      <span className="file-inputs__upload-form__progress">
        <LinearProgress id="file-upload-status" value={progress} />
      </span>
    );
  }

  return (
    <React.Fragment>
      {progressBar}

      <FileUpload
        id="upload-file"
        label="Attachments"
        required
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onProgress={handleProgress}
        name="file"
        className="md-cell md-cell--4"
        secondary
        iconBefore
      />
      <TextField
        id="upload-file-field"
        placeholder="No file chosen"
        value={fileName}
        className=" md-cell md-cell--4"
        readOnly
        fullWidth={false}
      />
    </React.Fragment>
  );
};

export default UploadFile;
