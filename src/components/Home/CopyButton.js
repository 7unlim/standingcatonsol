import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa6";

const CopyButton = () => {
  // Step 2: Use useState to manage the button text
  const [buttonText, setButtonText] = useState('GPjNUrcXpUMv22kWiZwieMDzP2eNz8NgmDfb48LpDM3K');
  const [paddingText, setPaddingText] = useState(` `);
  // Step 3: Define the onClick event handler
  const handleButtonClick = () => {
    // Copy the button text to the clipboard
    navigator.clipboard.writeText(buttonText)
      .then(() => {
        // Optional: Provide feedback that the text was copied
        // alert('Text copied to clipboard!');
      })
      .catch(err => {
        // Handle any errors
        console.error('Failed to copy text: ', err);
      });
  };

  // Step 4: Render the button with the text and onClick handler
  return (
    <button onClick={handleButtonClick} className="copy-text-button">
      {buttonText}
      {paddingText}
      <FaCopy className="icon-padding"/>
    </button>
  );
};

export default CopyButton;