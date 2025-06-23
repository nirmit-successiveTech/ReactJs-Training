"use client"
import { useEffect, useState } from "react"

export default function Notification(){
    const [msg,setmsg]=useState('');
    const [val,setval]=useState('');

    function HandleClick(){
        setmsg(val)
    }

    useEffect(()=>{
       const id =  setTimeout(()=>{
            console.log(msg);
            setmsg('')
        },5000);

        return ()=>clearTimeout(id)
    },[msg])


    return(
        <div className="notification-wrapper">
            <div>
                <input type="text" onChange={(e)=>setval(e.target.value)} />
            </div>
                <div><button onClick={HandleClick}>Add</button></div>
            <p>{msg}</p>
        </div>
    )
}