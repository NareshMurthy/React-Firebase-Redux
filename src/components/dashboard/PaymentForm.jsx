import React, { useState } from "react";

import "./styles.css";
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
        <h4 className="mb-3">Payment</h4>
        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              checked
              required
            />
            <label className="custom-control-label" for="credit">
              Credit card
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              required
            />
            <label className="custom-control-label" for="debit">
              Debit card
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              required
            />
            <label className="custom-control-label" for="paypal">
              Paypal
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder=""
              required
            />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">Name on card is required</div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder=""
              required
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="cc-expiration">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Continue to checkout
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
