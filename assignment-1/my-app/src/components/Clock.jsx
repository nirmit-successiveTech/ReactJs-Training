"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const currenttime = new Date().toLocaleTimeString();
  const [time, settime] = useState(currenttime);

  useEffect(() => {
    const id = setInterval(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("clear")
      clearInterval(id);
    };
  }, []);

  return (
    <div className="clock" style={{margin:'auto',width:'50%',textAlign:'center',paddingTop:'20px',fontSize:'30px'}}>
      <p>{time}</p>
    </div>
  );
}
