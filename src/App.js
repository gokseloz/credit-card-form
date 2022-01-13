import React, { useState, useEffect, useReducer } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import "./styles/App.scss";

const App = () => {
  return (
    <main className="container">
      <Card />
      <Form />
    </main>
  );
};

export default App;
