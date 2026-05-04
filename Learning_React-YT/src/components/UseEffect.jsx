import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   // useEffect runs when count changes
//   useEffect(() => {
//     console.log("Count updated:", count);
//     document.title = `${count}`;
//   }, [count]);

//   return (
//     <section className="p-6 bg-gray-100 rounded-lg text-center">
//       <h2 className="text-2xl font-bold mb-4">useEffect Demo</h2>

//       <p className="text-xl mb-4">Count: {count}</p>

//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setCount((prev) => prev + 1)}
//       >
//         Increase
//       </button>
//     </section>
//   );
// };

// export default UseEffect;




const ThemeSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  // 1️⃣ Detect system theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // 2️⃣ Apply theme + save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <section className="p-6 rounded-lg text-center transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4">
        🌗 Smart Theme Switcher
      </h2>

      <p className="mb-4">
        Current Mode: {darkMode ? "Dark 🌙" : "Light ☀️"}
      </p>

      <button
        onClick={() => setDarkMode(prev => !prev)}
        className="px-5 py-2 rounded bg-blue-500 text-white hover:scale-105 transition"
      >
        Toggle Theme
      </button>
    </section>
  );
};

export default ThemeSection;
