const initialState = {
  finishDate: "",
  shortDescription: "",
  description: "",
  freelancer: "",
  showToast: false
};

const jobReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "HANDLE_DATE_CHANGE":
      newState["finishDate"] = action.date;
      return newState;
    case "HANDLE_CHANGE":
      newState[action.e.target.name] = action.e.target.value;
      return newState;
    case "HANDLE_SELECT_CHANGE":
      newState["freelancer"] = action.e;
      return newState;
    case "DO_SUBMIT":
      newState["showToast"] = true;
      return newState;
    case "ADD_JOB_ERROR":
      console.log("create job err", action.err);
      return newState;
    default:
      return newState;
  }
};
export default jobReducer;
