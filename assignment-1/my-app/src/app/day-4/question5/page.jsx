"use client"
import { useState } from "react"

export default function Question5(){
    const [choice,setchoice]=useState('');
    const [display,setdisplay]=useState('')
    const HandleClick = (e)=>{
        e.preventDefault();
        console.log('calling',choice)
        setdisplay(choice);
    }

    return(
        <div style={{paddingTop:'15%',margin:'auto',width:'30%',textAlign:'center'}}>
            <div>Select one:</div>
            <select name="Select Prefrences" id="" value={choice} onChange={(e)=>setchoice(e.target.value)}>
                <option value="" >Choose</option>
                <option value="Food">Food</option>
                <option value="Gym">Gym</option>
                <option value="MOvie">Movie</option>
                <option value="Sleep">Sleep</option>
            </select>
            <button onClick={HandleClick}>Select</button>
            <div>{display}</div>
        </div>
    )
}