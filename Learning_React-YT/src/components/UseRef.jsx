import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className="p-5 flex flex-col items-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
        className={`border p-2 transition-all duration-300 ${
          showInput ? "w-80 opacity-100" : "w-0 opacity-0"
        }`}
      />

      <button
        onClick={() => setShowInput(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Show Input
      </button>
    </div>
  );
};

export default UseRef;