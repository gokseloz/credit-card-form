const reducer = (state, action) => {
  if (action.type === "CREATE_CARD_NUMBER") {
    return { ...state, cardNumber: action.payload.slice(0, 16) };
  }

  if (action.type === "CREATE_CARD_HOLDER") {
    return { ...state, cardHolder: action.payload };
  }

  if (action.type === "CREATE_EXPIRY_MONTH") {
    if (action.payload >= 0 && action.payload < 13) {
      return { ...state, expiryMonth: action.payload.slice(0, 2) };
    }
    return { ...state, expiryMonth: "00" };
  }

  if (action.type === "CREATE_EXPIRY_YEAR") {
    if (Number(action.payload) >= 0 && Number(action.payload) < 43) {
      return { ...state, expiryYear: action.payload.slice(0, 3) };
    }
    return { ...state, expiryYear: "MM" };
  }

  if (action.type === "CREATE_CVV") {
    return { ...state, cvv: action.payload.slice(0, 3) };
  }
};

export default reducer;
