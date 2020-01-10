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
    <div className="file-inputs__upload-form">
      {progressBar}

      <FileUpload
        id="upload-file"
        label="Attachments"
        required
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onProgress={handleProgress}
        name="file"
        className="file-inputs__upload-form__file-upload"
        secondary
        iconBefore
      />
      <TextField
        id="upload-file-field"
        placeholder="No file chosen"
        value={fileName}
        className="file-inputs__upload-form__file-field"
        readOnly
        fullWidth={false}
      />
    </div>
  );
};

export default UploadFile;
