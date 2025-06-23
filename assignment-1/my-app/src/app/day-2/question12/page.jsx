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
    <div>
      <div>
        <p>{state.partyA}</p>
        <p>{state.partyB}</p>
        <p>{state.partyC}</p>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "Vote-A" })}>Vote A</button>
        <button onClick={() => dispatch({ type: "Vote-B" })}>Vote B</button>
        <button onClick={() => dispatch({ type: "Vote-C" })}>Vote C</button>
      </div>
    </div>
  );
}
