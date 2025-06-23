"use client";
import { useState } from "react";

export default function ToDo() {
  const [val, setval] = useState("");
  const [todo, settodo] = useState([]);

  function HandleClick() {
    settodo([...todo, val]);
    console.log("calling");
    setval(" ");
  }

  return (
    <>
      <div className="input-values">
        <div><h2>ToDo List</h2></div>
        <div>
          <input
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setval(e.target.value)}
          />
        </div>
        <div>
            <button onClick={HandleClick}>Add</button>
        </div>
        
      </div>

      <div>
        {todo.map((element, index) => (
          <div key={index} className="list-element">
            <div className="listvalues">
              <div>{element}</div>
              <div>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
