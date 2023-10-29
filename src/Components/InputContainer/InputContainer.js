import React from "react";

const InputContainer = ({
  label,
  name,
  value,
  handleChange,
  disabled = false,
}) => {
  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input
        className="input"
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default InputContainer;
