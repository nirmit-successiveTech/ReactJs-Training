"use client"
import { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export default function Question18(){
    const {setitem,getitem}=useLocalStorage('username',);
    const [change,setchange]=useState('')

    return(
        <div>
            <div>{getitem}</div>
            <div>
                <div>
                    <input type="text" placeholder="Enter the text" onChange={(e)=>setchange(e.target.value)} />
                </div>
                <div>
                    <button onClick={()=>setitem(change)}>Use Storage</button>
                </div>
            </div>
        </div>
    )


}