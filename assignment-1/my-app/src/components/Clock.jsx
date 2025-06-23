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
      clearInterval(id);
    };
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
}
