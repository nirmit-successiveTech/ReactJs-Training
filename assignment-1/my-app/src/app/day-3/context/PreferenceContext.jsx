// context/PreferencesContext.jsx
'use client';

import React, { createContext, useState, useContext } from 'react';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <PreferencesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
