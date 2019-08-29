const regEx = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
  phone: /^\d{11}$/,
  lastName: /^[a-z]{3,20}$/,
  firstName: /^[a-z]{3,20}$/,
  password: /^[\w@-]{6,20}$/
};
const formValidation = (type, value) => {
  if (regEx[type].test(value)) {
    return true;
  } else {
    return false;
  }
};

export default formValidation;
