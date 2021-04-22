const Index = ({ title, variant, func }) => {
  return (
    <>
      {variant ? (
        <button
          className={`${
            variant === "green"
              ? "bg-green-500"
              : variant === "red"
              ? "bg-red-500"
              : variant === "blue"
              ? "bg-blue-500"
              : ""
          } text-white shadow-md px-4 py-2 rounded`}
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
