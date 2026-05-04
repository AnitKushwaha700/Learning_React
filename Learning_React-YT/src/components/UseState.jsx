import React, { useState } from "react";

const UseState = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: bgColor, minHeight: "30vh" }}
      className="flex justify-center items-center gap-10"
    >
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("lightblue")}
      >
        Blue
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("lightgreen")}
      >
        Green
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("lightcoral")}
      >
        Red
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("plum")}
      >
        Purple
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("orange")}
      >
        Orange
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("gold")}
      >
        Yellow
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("gray")}
      >
        Gray
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("black")}
      >
        Black
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("white")}
      >
        White
      </button>
      <button
        className="px-8 py-3 rounded-xl text-lg font-semibold 
  bg-blue-500 text-white 
  hover:bg-blue-600 
  transition-all duration-100 scale-100 hover:scale-120"
        onClick={() => setBgColor("#1e293b")}
      >
        Dark Blue
      </button>
    </div>
  );
};

export default UseState;
