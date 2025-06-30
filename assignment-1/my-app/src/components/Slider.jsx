"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
  const myimages = [
    "/file.svg",
    "/globe.svg",
    "/next.svg",
    "/vercel.svg",
    "/window.svg",
  ];


  const [cnt, setcnt] = useState(0);
  const [interval, setinterval] = useState(3000);
  const [val, setval] = useState("");
  const [flag, setflag] = useState(true);

  useEffect(() => {
    let id;
    if (flag) {
      id = setInterval(() => {
        setcnt((cnt) => (cnt + 1) % myimages.length);
      }, interval);
    }

    return () => clearInterval(id);
  }, [flag, interval]);

  function HandleClick() {
    setflag((flag) => !flag);
  }

  function handleSetInterval() {
    const parsed = Number(val);
    console.log(typeof(parsed))
    setinterval(val);
  }

  return (
    <div
      className="parent-wrapper"
      style={{
        margin: "auto",
        width: "50%",
        textAlign: "center",
        border: "solid 2px black",
        padding: "20px",
      }}
    >
      <div className="box-wrapper">
        <img src={myimages[cnt]} width={300} height={300} alt="" />
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter interval (ms)"
          onChange={(e) => setval(e.target.value)}
          value={val}
        />
        <button onClick={handleSetInterval}>Set</button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={HandleClick}
          style={{
            padding: "15px",
            backgroundColor: flag ? "red" : "green",
            color: "white",
            border: "none",
            width: "100px",
            borderRadius: "10px",
          }}
        >
          {flag ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
