"use client";
import { useState } from "react";

export default function Counter() {
  const [cnt, setcnt] = useState(0); //

  return (
    <>
      <div id="counter">    
        <p>{cnt}</p>

        <div id="mybtn">
          <button className="incbtn" onClick={() => setcnt(cnt + 1)}>
            Increase
          </button>
          <button className="decbtn" onClick={() => setcnt(cnt - 1)}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}
