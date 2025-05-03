// src/context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LOCAL_STORAGE_KEY = "ordercraft-language";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState("en");

  // Load initial language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedLang) {
      setLanguageState(storedLang);
    }
  }, []);

  // Middleware to persist to localStorage
  const setLanguage = (lang) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
