"use client";
import { useReducer } from "react";

const initialstate = {
  partyA: 0,
  partyB: 0,
  partyC: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Vote-A":
      return { ...state, partyA: state.partyA + 1 };
    case "Vote-B":
      return { ...state, partyB: state.partyB + 1 };
    case "Vote-C":
      return { ...state, partyC: state.partyC + 1 };
    default:
      return state;
  }
};

export default function Question12() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div style={{width:'50%',margin:'auto',textAlign:'center',fontSize:'30px'}}>
      <div >
        <p>{state.partyA}</p>
        <p>{state.partyB}</p>
        <p>{state.partyC}</p>
      </div>
      <div style={{display:'flex',flexDirection:'row',margin:'auto',width:'50%',justifyContent:'space-between'}}>
        <button  style={{backgroundColor:'red',color:'white',border:'none',borderRadius:'10px'}}   onClick={() => dispatch({ type: "Vote-A" })}>Vote A</button>
        <button  style={{backgroundColor:'yellow',color:'white',border:'none',borderRadius:'10px'}} onClick={() => dispatch({ type: "Vote-B" })}>Vote B</button>
        <button  style={{backgroundColor:'green',color:'white',border:'none',borderRadius:'10px'}} onClick={() => dispatch({ type: "Vote-C" })}>Vote C</button>
      </div>
    </div>
  );
}
