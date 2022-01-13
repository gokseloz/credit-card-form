import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
  cardNumber: "",
  cardHolder: "",
  expiryMonth: "",
  expiryYear: "",
  cvv: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFocused, setIsFocused] = useState(false);

  const createCardNumber = (e) => {
    dispatch({ type: "CREATE_CARD_NUMBER", payload: e.target.value });
  };

  const createCardHolder = (e) => {
    dispatch({ type: "CREATE_CARD_HOLDER", payload: e.target.value });
  };

  const createExpiryMonth = (e) => {
    dispatch({ type: "CREATE_EXPIRY_MONTH", payload: e.target.value });
  };

  const createExpiryYear = (e) => {
    dispatch({ type: "CREATE_EXPIRY_YEAR", payload: e.target.value });
  };

  const createCvv = (e) => {
    dispatch({ type: "CREATE_CVV", payload: e.target.value });
  };
  console.log(state.expiryYear);

  return (
    <AppContext.Provider
      value={{
        ...state,
        createCardNumber,
        createCardHolder,
        createExpiryMonth,
        createExpiryYear,
        createCvv,
        isFocused,
        setIsFocused,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
