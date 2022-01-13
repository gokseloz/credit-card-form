import React from "react";
import chip from "../../public/images/chip.svg";
import visa from "../../public/images/visa.svg";
import { useGlobalContext } from "../helpers/content";

const Card = () => {
  const { cardNumber, cardHolder, expiryMonth, expiryYear, cvv, isFocused } =
    useGlobalContext();
  return (
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
        <div className="card-front-cardNumber">
          {cardNumber || "****************"}
        </div>
        <div className="card-front-bottom">
          <div className="card-holder-wrapper">
            <span className="card-key">card holder</span>
            <span className="card-holder-value">
              {cardHolder || "Name Surname"}
            </span>
          </div>
          <div className="card-expiryDate-wrapper">
            <span className="card-key">expiry date</span>
            <div className="card-expiryDate">
              <span className="card-expire-value">{expiryMonth || "MM"}</span>
              {" / "}
              <span className="card-expire-value">{expiryYear || "YY"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-back">
        <div className="card-back-stripe"></div>
        <div className="card-back-cvv">
          <span>CVV</span>
          <span>{cvv}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
