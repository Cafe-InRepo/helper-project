// src/utils/i18n.js
import en from "../locals/en.json";
import fr from "../locals/fr.json";
import ar from "../locals/ar.json";

const translations = { en, fr, ar };

// Helper to get nested keys from an object using dot notation
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

export const getTranslation = (key, lang = "en") => {
  return getNestedValue(translations[lang], key) || key;
};
