import React, { useState, useEffect, useReducer } from "react";
import chip from "../public/images/chip.svg";
import visa from "../public/images/visa.svg";

import "./styles/App.scss";

const App = () => {
  const [isFocused, setIsFocused] = useState(false);

  const reducer = (state, action) => {
    if (action.type === "CREATE_CARD_NUMBER") {
      return { ...state, cardNumber: action.payload.slice(0, 16) };
    }

    if (action.type === "CREATE_CARD_HOLDER") {
      return { ...state, cardHolder: action.payload };
    }

    if (action.type === "CREATE_EXPIRY_DATE") {
      return { ...state, expiryDate: action.payload };
    }

    if (action.type === "CREATE_CVV_DATE") {
      console.log(state.cvv);

      return { ...state, cvv: action.payload.slice(0, 3) };
    }
  };

  const initialState = {
    cardNumber: "**** **** **** ****",
    cardHolder: "Max Muster",
    expiryDate: "MM/YY",
    cvv: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const createCardNumber = (e) => {
    dispatch({ type: "CREATE_CARD_NUMBER", payload: e.target.value });
  };

  const createCardHolder = (e) => {
    dispatch({ type: "CREATE_CARD_HOLDER", payload: e.target.value });
  };

  const createExpiryDate = (e) => {
    dispatch({ type: "CREATE_EXPIRY_DATE", payload: e.target.value });
  };

  const createCvv = (e) => {
    dispatch({ type: "CREATE_CVV_DATE", payload: e.target.value });
  };

  return (
    <main className="container">
      <div className={`card ${isFocused ? "isRotated" : ""}`}>
        <div className="card-front">
          <div className="card-front-top">
            <figure>
              <img src={chip} alt="magnetic chip" />
            </figure>
            <figure>
              <img src={visa} alt="visa logo" />
            </figure>
          </div>
          <div className="card-front-cardNumber">{state.cardNumber}</div>
          <div className="card-front-bottom">
            <div className="card-holder-wrapper">
              <span className="card-key">card holder name</span>
              <span className="card-holder-value">{state.cardHolder}</span>
            </div>
            <div className="card-expiryDate-wrapper">
              <span className="card-key">expiry date</span>
              <span className="card-expire-value">{state.expiryDate}</span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-stripe"></div>
          <div className="card-back-cvv">
            <span>CVV</span>
            <span>{state.cvv}</span>
          </div>
        </div>
      </div>

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
                expiry date
              </label>
              <input
                type="text"
                className="inputBox-value"
                id="expiryDate"
                onChange={createExpiryDate}
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
                onChange={createCvv}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
