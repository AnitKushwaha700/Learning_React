import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

const UseContext = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainUI />
    </ThemeContext.Provider>
  );
};

// 2️⃣ Main UI Component
const MainUI = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[300px] flex items-center justify-center rounded-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <Card />
    </div>
  );
};

// 3️⃣ Card Component
const Card = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-6 rounded-2xl shadow-xl w-[300px] text-center bg-[var(--color-base-200)]">
      
      <h2 className="text-2xl font-bold mb-2">
        🎨 Theme Switcher
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        Current Mode: <span className="font-semibold">{theme}</span>
      </p>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white hover:scale-105 transition"
      >
        Toggle Theme
      </button>

    </div>
  );
};

export default UseContext;