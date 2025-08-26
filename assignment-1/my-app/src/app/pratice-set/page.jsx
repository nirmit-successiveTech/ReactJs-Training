"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Practise(){
    const [val,setval] = useState(5);
    const [flag,setflag]=useState(true)
    console.log(typeof(val));

    useEffect(()=>{
        let id;
        if(flag){
            
            id=setInterval(()=>{
                if(val>0){
            setval((prev)=>prev>0?prev-1:0);
                }
        },1000)

        }

        return ()=>clearInterval(id)

    },[flag])
    return(
        <>
        <div>
        {val}
        <div>
            <button onClick={()=>setflag(false)}>pause</button>
        </div>
        </div>
        </>
    )
}