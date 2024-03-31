"use client";

import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const switchHandler = () => {
    setMode(e => (e === "dark" ? "light" : "dark"));
  };

  return (
    <themeContext.Provider value={{ switchHandler, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </themeContext.Provider>
  );
};
