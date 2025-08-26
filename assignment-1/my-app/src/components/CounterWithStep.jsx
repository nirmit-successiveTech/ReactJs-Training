"use client";
import { useState } from "react";

export default function CounterWithStep() {
  const [count, setcount] = useState(0);
  const [val, setval] = useState(0);

  function Increase() {
    console.log('calling function');
    setcount(count + parseInt(val));
  }

  function Decrease() {
    setcount(count - parseInt(val));
  }

  return (
    <div className="cnt-wrapper" style={{margin:'auto',width:'50%',textAlign:'center',paddingTop:'20px',display:'flex',flexDirection:'column',gap:"15px"}}>
      <p>{`The value of step is is: ${count}`}</p>
      <div className="cnt-button">
        <button onClick={Increase} style={{padding:'15px',backgroundColor:'green',color:'white',border:'none',width:'100px',borderRadius:'10px'}} >Increment</button>
        <button onClick={Decrease} style={{padding:'15px',backgroundColor:'red',color:'white',border:'none',width:'100px',borderRadius:'10px'}}  >Decrement</button>
      </div>
      <div>
        <input style={{padding:'10px'}}
          type="number"
          placeholder="Enter Your Steps"
          onChange={(e) => setval(e.target.value)}
        />
      </div>
    </div>
  );
}
