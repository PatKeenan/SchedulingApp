/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

const index = ({
  inputValue,
  type,
  onChange,
  placeHolder,
  label,
  chars,
  primaryInput,
}) => {
  return (
    <React.Fragment>
      <label className="text-gray-500 text-base pt-3">{label}</label>
      <input
        type={type}
        value={inputValue}
        onChange={onChange}
        placeholder={placeHolder}
        maxLength={20}
        className={`${
          chars > 0
            ? "text-gray-600 duration-150 ease-in-out"
            : "border-gray-300 text-gray-300"
        } ${
          chars > 0 && primaryInput ? "font-semibold" : ""
        } ${"border-b-2 focus:text-gray-600 hover:border-gray-500 focus:border-blue-500 transition transform ease-linear duration-100 text-base pt-1 focus:outline-none"}`}
      />
    </React.Fragment>
  );
};

export default index;
