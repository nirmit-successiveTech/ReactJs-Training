"use client"
import { useReducer } from "react"

const initialvalue = {
    'votea':0,
    'voteb':0,
    'votec':0,
    
}

const reducer=(state,action)=>{
    switch(action.type){
        case "vote-a":
            return {...state,votea:state.votea+1}
        case "vote-b":{
            return {...state,voteb:state.voteb+1}
        }
        case "vote-c":{
            return {...state,votec:state.votec+1}
        }
    }
}




export default function Vote(){

    const [state,dispatch] = useReducer(reducer,initialvalue)

    return(
        <div>
            {state.votea}
            {state.voteb}
            {state.votec}
            <button onClick={()=>dispatch({type:'vote-a'})}>vote a</button>
            <button onClick={()=>dispatch({type:'vote-b'})}>vote b</button>
            <button onClick={()=>dispatch({type:'vote-c'})}>vote c</button>
        </div>
    )
}