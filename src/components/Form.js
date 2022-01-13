import React from "react";
import { useGlobalContext } from "../helpers/content";

const Form = () => {
  const {
    cardNumber,
    cvv,
    expiryMonth,
    expiryYear,
    createCardNumber,
    createCardHolder,
    createExpiryMonth,
    createExpiryYear,
    createCvv,
    setIsFocused,
  } = useGlobalContext();
  return (
    <div className="form-container">
      <form action="#" className="form">
        <div className="inputBox">
          <label htmlFor="cardNumber" className="inputBox-key">
            card number
          </label>
          <input
            type="number"
            className="inputBox-value"
            id="cardNumber"
            onChange={createCardNumber}
            value={cardNumber}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="cardHolder" className="inputBox-key">
            card holder
          </label>
          <input
            type="text"
            className="inputBox-value"
            id="cardHolder"
            onChange={createCardHolder}
          />
        </div>

        <div className="expiry_cvv">
          <div className="inputBox">
            <label htmlFor="expiryDate" className="inputBox-key">
              expiry month
            </label>
            <input
              type="number"
              className="inputBox-value expiryMonthInput"
              id="expiryDate"
              value={expiryMonth}
              onChange={createExpiryMonth}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="expiryDate" className="inputBox-key">
              expiry year
            </label>
            <input
              type="number"
              className="inputBox-value expiryYearInput"
              id="expiryDate"
              value={expiryYear}
              onChange={createExpiryYear}
              onBlur={createExpiryYear}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="cvv" className="inputBox-key">
              CVV
            </label>
            <input
              type="number"
              className="inputBox-value"
              id="cvv"
              value={cvv}
              onChange={createCvv}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
