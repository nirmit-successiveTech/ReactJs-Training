"use client"
import { useCallback, useState } from "react"
import Child from "./Child";

export default function Parent(){
    const [cnt,setcnt]=useState(0);

    const handleClick=useCallback(()=>{
        setcnt(cnt+1)
    },[cnt])

    const resetvalue =useCallback(()=>{
        setcnt(0)
    },[])

    return(
        <div style={{width:'50%',margin:'auto',textAlign:'center'}}>
            <Child name={'Click Me'} handleClick={handleClick} count={cnt} resetValue={resetvalue}/> 
        </div>
    )
}