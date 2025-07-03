"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchPost() {
  const [mydata, setmydata] = useState([]);
  const [error, seterror] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setmydata(response.data);
      seterror(false);
    } catch (error) {
      console.error("Error fetching data");
      seterror(true);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          flexDirection: "column",
        }}
      >
        <button
          onClick={fetchdata}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
      }}
    >
      <div>
        {mydata.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px 16px",
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              fontSize: "16px",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
