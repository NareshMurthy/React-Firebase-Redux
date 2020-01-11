const initialState = {
  job: {
    finishDate: "",
    shortDescription: "",
    description: "",
    domain: ""
  },
  toastText: ""
};

const jobReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "HANDLE_DATE_CHANGE":
      newState.job["finishDate"] = action.date;
      return newState;
    case "HANDLE_CHANGE":
      newState.job[action.e.target.name] = action.e.target.value;
      return newState;
    case "HANDLE_SELECT_CHANGE":
      newState.job["domain"] = action.e;
      return newState;
    case "DO_SUBMIT":
      initialState.toastText = "Job posted successfully";
      return initialState;
    case "ADD_JOB_ERROR":
      console.log("create job err", action.err);
      return newState;
    default:
      return newState;
  }
};
export default jobReducer;
