"use client"
import { useReducer } from "react";
const initialvalue={
    count:0
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count+1}
        
            case 'decrement':
                return {count:state.count-1}
    }
}


export default function CountWithDispatch(){
    const [state,dispatch]=useReducer(reducer,initialvalue);

    return(
        <div>
            <div><div>{state.count}</div>
                <button onClick={()=>dispatch({type:'increment'})}>increase</button>
                <button onClick={()=>dispatch({type:'decrement'})}>decrease</button>
            </div>
        </div>
    )
}