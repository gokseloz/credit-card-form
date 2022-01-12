import React, { useState } from "react";
import chip from "../public/images/chip.svg";
import visa from "../public/images/visa.svg";

import "./styles/App.scss";

const App = () => {
  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [cardHolder, setCardHolder] = useState("Max Muster");
  const [expiryDate, setExpiryDate] = useState("../..");
  const [cvv, setCvv] = useState("***");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="container">
      <div className="card">
        <div className="card-front">
          <div className="card-front-top">
            <figure>
              <img src={chip} alt="magnetic chip" />
            </figure>
            <figure>
              <img src={visa} alt="visa logo" />
            </figure>
          </div>
          <div className="card-front-cardNumber">{cardNumber}</div>
          <div className="card-front-bottom">
            <div className="card-holder-wrapper">
              <span className="card-key">card holder name</span>
              <span className="card-holder-value">{cardHolder}</span>
            </div>
            <div className="card-expiryDate-wrapper">
              <span className="card-key">expiry date</span>
              <span className="card-expire-value">{expiryDate}</span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-stripe"></div>
          <div className="card-back-cvv">
            CVV
            <span className="card-back-cvv-value">{cvv}</span>
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
              maxLength={16}
              id="cardNumber"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="cardHolder" className="inputBox-key">
              card holder
            </label>
            <input type="text" className="inputBox-value" id="cardHolder" />
          </div>

          <div className="expiry_cvv">
            <div className="inputBox">
              <label htmlFor="expiryDate" className="inputBox-key">
                expiry date
              </label>
              <input type="text" className="inputBox-value" id="expiryDate" />
            </div>

            <div className="inputBox">
              <label htmlFor="cvv" className="inputBox-key">
                CVV
              </label>
              <input type="text" className="inputBox-value" id="cvv" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
