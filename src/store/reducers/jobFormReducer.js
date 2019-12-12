const initialState = {
  finishDate: "",
  shortDescription: "",
  description: "",
  attachments: "",
  freelancer: "",
  renderPaymentPage: false
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
    case "DO_SUBMIT":
      newState["renderPaymentPage"] = true;
      return newState;
    case "ADD_JOB_ERROR":
      console.log("create job err", action.err);
      return newState;
    default:
      return newState;
  }
};
export default jobReducer;
