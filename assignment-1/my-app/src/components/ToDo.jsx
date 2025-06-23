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
      <div className="input-values" style={{margin:"auto",width:"50%",textAlign:'center',display:"flex",flexDirection:"column",gap:"15px"}}>
        <div><h2>ToDo List</h2></div>
        <div>
          <input style={{padding:'12px',borderRadius:'10px'}}
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setval(e.target.value)}
          />
        </div>
        <div>
            <button onClick={HandleClick} style={{padding:'15px',backgroundColor:'green',color:'white',border:'none',width:'60px',borderRadius:'10px'}}>Add</button>
        </div>
        
      </div>

      <div >
        {todo.map((element, index) => (
          <div key={index} className="list-element" >
            <div className="listvalues" style={{display:'flex',justifyContent:'space-between',textAlign:'center',margin:'auto',width:'300px'}}>
              <div>{element}</div>
              <div>
                <button style={{padding:'15px',backgroundColor:'red',color:'white',border:'none',width:'60px',borderRadius:'10px'}}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
