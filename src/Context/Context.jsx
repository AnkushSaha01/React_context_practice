import React, { useState } from "react";
import { createContext } from "react";
import Products from "../DB/Data";

export const LogStorage = createContext();
if (!localStorage.getItem("Products")) {
  localStorage.setItem("Products", JSON.stringify(Products));
}

const Context = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("Products")) || [],
  );

  return (
    <LogStorage.Provider value={{ products, setProducts }}>
      {children}
    </LogStorage.Provider>
  );
};

export default Context;
