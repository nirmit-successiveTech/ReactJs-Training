"use client";
import axios from "axios";
import { useState } from "react";

export default function FormComponent() {
  const [text, settext] = useState('');
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
  const [status, setstatus] = useState('');

  const handlclick = async (e) => {
    e.preventDefault();
    try {
      const datasend = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        text,
        number,
        password,
      });
      if (datasend.status) {
        setstatus(`Submitted successfully! Status: ${datasend.status}`);
      }
    } catch (error) {
      setstatus('Submission failed');
      console.error(error);
    }
  };

  return (
    <div
      style={{
        margin:'auto',
        width:"50%",
        paddingTop:"100px"

      }}
    >
      <form
        onSubmit={handlclick}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          width: "280px",
        }}
      >
        <input
          type="text"
          placeholder="Enter the name"
          required
          onChange={(e) => settext(e.target.value)}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <input
          type="number"
          required
          placeholder="Enter the number"
          onChange={(e) => setnumber(e.target.value)}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <input
          type="password"
          required
          placeholder="Enter the password"
          onChange={(e) => setpassword(e.target.value)}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Submit
        </button>
        {status && (
          <div style={{ marginTop: "10px", fontSize: "13px", color: "green" }}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
}
