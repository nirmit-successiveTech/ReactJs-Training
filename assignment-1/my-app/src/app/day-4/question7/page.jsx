"use client"
import { useEffect, useState } from "react";

export default function Question7() {
  const [list, setlist] = useState('');
  const [todo, settodo] = useState(['eat', 'sleep', 'coding', 'gym', 'walk', 'movie']);
  const [flag, setflag] = useState(false);

  const HandleClick = (e) => {
    e.preventDefault();
    setflag(prev => !prev); // toggle flag
  };

  useEffect(() => {
    if (list) {
      console.log("calling");
      settodo(prev => prev.filter(item => item === list));
    }
  }, [flag]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10%',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter the task to-do"
          onChange={(e) => setlist(e.target.value)}
          value={list}
        />
      </div>

      <button onClick={HandleClick} style={{ marginBottom: '20px' }}>
        Find
      </button>

      <div>
        {todo.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
