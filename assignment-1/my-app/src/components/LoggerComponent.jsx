"use client";
import withLogger from "@/app/day-5/hoc/withLogger";
import { useEffect, useState } from "react";

function LoggerComponent() {
  useEffect(() => {
    console.log("LoggerComponent updated");
  });

  const [count, setcount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "250px",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "16px" }}>{count}</div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => setcount(count + 1)}
            style={{
              padding: "8px 12px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Increase
          </button>
          <button
            onClick={() => setcount(count - 1)}
            style={{
              padding: "8px 12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

const LogCounter = withLogger(LoggerComponent);
export default LogCounter;
