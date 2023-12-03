import { useState } from "react";
import "./styles.css";

export default function App() {
  const [sec, setSec] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleStart = () => {
    clearInterval(timer);
    let newTimer = setInterval(() => {
      setSec((prevState) => prevState + 1);
    }, 1000);
    setTimer(newTimer);
  };

  const handleReset = () => {
    clearInterval(timer);
    setSec(0);
  };
  return (
    <div className="App">
      <div>
        <h1>Timer : {sec}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
