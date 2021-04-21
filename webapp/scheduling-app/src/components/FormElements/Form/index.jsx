import React from "react";

const Index = ({ data, children, submitFunc, bigTitle }) => {
  return (
    <div className="h-auto w-full my-auto">
      <form
        className="bg-gray-50 px-20 py-10 flex flex-col h-auto shadow-md rounded-md w-2/5 mx-auto relative"
        onSubmit={submitFunc}
      >
        <h3>{bigTitle}</h3>
        {children}
      </form>
    </div>
  );
};

export default Index;
