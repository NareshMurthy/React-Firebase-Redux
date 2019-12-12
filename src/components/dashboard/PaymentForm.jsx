import React, { useState } from "react";
const PaymentForm = props => {
  const initialState = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };
  const [state, setState] = useState(initialState);
  const handleInputFocus = e => {
    setState({ focus: e.target.name });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setState({ [name]: value });
  };

  const { cvc, expiry, focus, name, number } = state;

  return (
    <div id="PaymentForm">
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="name"
          placeholder="Card name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="Card ex"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="Card cvc"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
