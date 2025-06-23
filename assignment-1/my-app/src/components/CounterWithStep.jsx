"use client";
import { useState } from "react";

export default function CounterWithStep() {
  const [count, setcount] = useState(0);
  const [val, setval] = useState(0);

  function Increase() {
    setcount(count + parseInt(val));
  }

  function Decrease() {
    setcount(count - parseInt(val));
  }

  return (
    <div className="cnt-wrapper">
      <p>{`The value of step is is: ${count}`}</p>
      <div className="cnt-button">
        <button onClick={Increase}>Increment</button>
        <button onClick={Decrease}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter Your Steps"
          onChange={(e) => setval(e.target.value)}
        />
      </div>
    </div>
  );
}
