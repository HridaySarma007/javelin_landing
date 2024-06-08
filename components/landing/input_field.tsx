// InputField.tsx
import React from "react";

interface InputFieldProps {
  hasPrefix: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ hasPrefix }) => {
  return (
    <div className="input-box">
      {hasPrefix ? <span className="prefix">+91</span> : null}
      <input
        type="number"
        placeholder="Phone number"
        className="[&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default InputField;
