import formValidation from "./FormValidaton";
const handleInputChange = (e, state) => {
  const { id, value } = e.target;
  let { errors } = state;

  switch (id) {
    case "email":
      errors.email = formValidation(id, value) ? "" : "Enter a valid mail id";
      break;
    case "password":
      errors.password = formValidation(id, value)
        ? ""
        : "Password should be atleast 6 characters";
      break;
    case "lastName":
      errors.lastName = formValidation(id, value)
        ? ""
        : "Enter a valid last name";
      break;
    case "firstName":
      errors.firstName = formValidation(id, value)
        ? ""
        : "Enter a valid first name";
      break;
    default:
      break;
  }
  let newState = { ...state };
  newState[id] = value;
  newState.errors = errors;
  return newState;
};
export default handleInputChange;
