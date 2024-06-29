// InputField.tsx
import React, { useState } from "react";

interface InputFieldProps {
  hasPrefix: boolean;
  onValueChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  hasPrefix,
  onValueChange,
}) => {
  const [inputValue, setInputValue] = useState(""); // Step 2: Initialize state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Step 3: Update state on change
    if (onValueChange) {
      onValueChange(event.target.value); // Notify parent component of the change
    }
  };

  return (
    <div className="input-box">
      {hasPrefix ? <span className="prefix">+91</span> : null}
      <input
        type="number"
        placeholder="Phone number"
        className="[&::-webkit-inner-spin-button]:appearance-none"
        value={inputValue} // Bind input value to state
        onChange={handleChange} // Update state on input change
      />
    </div>
  );
};

export default InputField;
