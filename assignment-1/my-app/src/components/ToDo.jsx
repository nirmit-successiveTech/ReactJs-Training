"use client";
import { useState } from "react";

export default function ToDo() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  function handleClick() {
    if (val.trim()) {
      setTodo([...todo, val]);
      setVal(""); // Clear input after adding task
    }
  }

  function deleteTask(id) {
    setTodo(todo.filter((item, index) => id !== index));
  }

  return (
    <>
      <div
        className="input-values"
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "2rem", color: "#4a90e2", marginBottom: "15px" }}>
            ToDo List
          </h2>
        </div>
        <div>
          <input
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "80%",
              fontSize: "1.1rem",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            type="text"
            placeholder="Enter your task"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            style={{
              padding: "15px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              width: "80px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        {todo.map((element, index) => (
          <div
            key={index}
            className="list-element"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              fontSize: "1.2rem",
              gap: "15px",
            }}
          >
            <div
              className="listvalues"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "20%",
                fontSize: "1rem",
              }}
            >
              <div >{element}</div>
              <div>
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    padding: "10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Delete
                </button>
                <input
                  type="checkbox"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
