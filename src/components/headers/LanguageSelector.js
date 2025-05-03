// src/components/LanguageSelector.js
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useLanguage } from "context/LanguageContext";
const SelectContainer = styled.div`
  ${tw`relative inline-block mr-6`}
`;

const Select = styled.select`
  ${tw`appearance-none border border-primary-500 rounded px-4 py-2 bg-white text-primary-700`}
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding-right: 2.5rem; /* Space for the custom arrow */
  width: 100%; /* Ensure it takes full width of container */

  &:focus {
    ${tw`border-primary-700`}
  }

  &:hover {
    ${tw`border-primary-600`}
  }

  @media (max-width: 768px) {
    ${tw`w-1/2`}/* 50% width on smaller screens */
  }

  @media (max-width: 640px) {
    ${tw`w-3/4`}/* 75% width on extra small screens */
  }

  @media (max-width: 480px) {
    ${tw`w-full`}/* 100% width on very small screens */
  }
`;

const Arrow = styled.div`
  ${tw`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none`}
  svg {
    ${tw`w-4 h-4 text-primary-700`}
  }
`;
const LanguageSelector = () => {
  const { setLanguage } = useLanguage();
  const currentLanguage = localStorage.getItem("ordercraft-language");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <SelectContainer>
      <Select value={currentLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">Arabic</option>
      </Select>
      <Arrow>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v12a1 1 0 01-2 0V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </Arrow>
    </SelectContainer>
  );
};

export default LanguageSelector;
