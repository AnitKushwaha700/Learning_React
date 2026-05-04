import React, { useState } from "react";

// const App = () => {
//   const array = useState(0);
//   const counter = array[0];
//   const setCounter = array[1];

//   function increaseCounter() {
//     setCounter(counter + 1);
//   }

//   console.log(array);

//   return (
//     <>
//       <h1>Counter: {counter}</h1>
//       <button onClick={increaseCounter}>Increases</button>
//     </>
//   );
// };

// export default App;

// const InputExample = () => {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h2>Hello, {name}</h2>
//     </div>
//   );
// };

// export default InputExample;

// const Toggle = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <h2>{isOn ? "ON 🔥" : "OFF ❄️"}</h2>

//       <button onClick={() => setIsOn(!isOn)}>
//         Toggle
//       </button>
//     </div>
//   );
// };

// export default Toggle;


// const BgChange = () => {
//   const [bgColor, setBgColor] = "White";
//   return (
//     <>
//       <div style={{ backgroundColor: bgColor, height: "100vh" }}>
//         <h1>Background Color : {bgColor}</h1>
//         <button onClick={() => setBgColor("lightblue")}>Blue</button>
//         <button onClick={() => setBgColor("lightgreen")}>Green</button>
//         <button onClick={() => setBgColor("lightcoral")}>Red</button>
//       </div>
//     </>
//   );
// };

// export default BgChange;


const BgChange = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <h1>Background Color : {bgColor}</h1>

      <button onClick={() => setBgColor("lightblue")}>Blue</button>
      <button onClick={() => setBgColor("lightgreen")}>Green</button>
      <button onClick={() => setBgColor("lightcoral")}>Red</button>
    </div>
  );
};

export default BgChange;
