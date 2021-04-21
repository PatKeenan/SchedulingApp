import React, { useState, useEffect } from "react";

const Index = ({ title, variant, func }) => {
  return (
    <>
      {variant ? (
        <button
          className={`bg-${variant}-500 text-white shadow-md px-4 py-2 rounded`}
          onClick={func}
        >
          {title}
        </button>
      ) : (
        <button
          className={`border border-blue-500 text-blue-500 shadow-md px-4 py-2 rounded`}
          onClick={func}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Index;
