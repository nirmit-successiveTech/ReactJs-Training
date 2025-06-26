"use client";
import { useEffect, useState } from "react";

export default function Slider() {
  const myimages = [
    "https://gravatar.com/avatar/5393df5d294a1782a303c404676e91b1?s=400&d=robohash&r=x",
    "https://robohash.org/a5e03c6168b1ea96b3e5cb2aae47370f?set=set4&bgset=&size=400x400",
    "https://gravatar.com/avatar/efe0a4a524dcf496e2f6aa44fcb85a3a?s=400&d=robohash&r=x",
    "https://robohash.org/efe0a4a524dcf496e2f6aa44fcb85a3a?set=set4&bgset=&size=400x400",
    "https://gravatar.com/avatar/44d69a256c99347210afa53425d581aa?s=400&d=robohash&r=x",
    "https://gravatar.com/avatar/c3d6de00069c3988b030f2387a80701d?s=400&d=robohash&r=x",
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
