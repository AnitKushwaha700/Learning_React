import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-5 text-center grid justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
        className="border p-2 mr-2 w-full focus:w-3xl"
      />

      <button
        onClick={handleFocus}
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        Focus Input
      </button>
    </div>
  );
};

export default UseRef;