import React, { useState, useEffect } from "react";

const Index = ({ title, variant, func }) => {
  const defaultStyle = "shadow-md px-4 py-2 rounded text-blue-500";
  const [buttonStyle, setButtonStyle] = useState(defaultStyle);

  const getColor = (prop) => {
    switch (prop) {
      case "primary":
        return setButtonStyle("bg-blue-500 text-white");
        break;
      case "danger":
        return setButtonStyle("bg-red-500 text-white");
        break;
      case "success":
        return setButtonStyle("bg-green-500 text-white");
        break;
      default:
        return setButtonStyle(defaultStyle);
        break;
    }
  };
  useEffect(() => {
    return getColor(variant);
  }, []);
  return (
    <>
      <button
        className={`${buttonStyle} shadow-md px-4 py-2 rounded`}
        onClick={func}
      >
        {title}
      </button>
    </>
  );
};

export default Index;
