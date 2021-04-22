import React from "react";

const Index = ({ data, children, submitFunc, bigTitle }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 grid place-items-center h-full justify-center align-middle growWebkit">
      <form
        className="bg-gray-50 px-10 py-10 flex flex-col h-auto shadow-md rounded-md mx-auto relative standardFormWidth"
        onSubmit={submitFunc}
      >
        <h3>{bigTitle}</h3>
        {children}
      </form>
    </div>
  );
};

export default Index;
