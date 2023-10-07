// ThemeProvider.js

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState('light'); // 'light' is the default theme

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const themeContextValue = {
    currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
  );
};
