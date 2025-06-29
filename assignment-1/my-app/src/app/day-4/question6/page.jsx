"use client";
import { useState } from "react";

export default function Question6() {
  const [list, setlist] = useState('');
  const [todo, settodo] = useState([]);

  const HandleClick = () => {
    if (list.trim() === '') return; // prevent empty tasks
    settodo([...todo, list]);
    setlist(''); // clear input after adding
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '10%' }}>
      <div>
        {/* Input and Button with space between */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter the task to-do"
            onChange={(e) => setlist(e.target.value)}
            value={list}
          />
          <button onClick={HandleClick}>Add</button>
        </div>

        {/* List with bullets and items on same line */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ol style={{ textAlign: 'left' }}>
            {todo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
