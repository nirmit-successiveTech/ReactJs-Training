"use client";
import useCountdown from "@/app/day-2/hook/useTimer";
import { useState } from "react";


export default function TimerHook() {
  const [inputVal, setInputVal] = useState("");
  const { count, isActive, start, pause, reset } = useCountdown();

  const handleStart = () => {
    const duration = parseInt(inputVal);
      start(duration);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Countdown Timer</h2>

      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {count > 0 ? count : "Time's up!"}
      </div>

      <input
        type="number"
        placeholder="Enter countdown seconds"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", marginBottom: "10px" }}
      />

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={handleStart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={pause}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pause
        </button>
                <button
          onClick={reset}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft:'5px'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
