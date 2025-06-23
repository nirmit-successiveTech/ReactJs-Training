"use client"
import { useEffect, useState } from "react"

export default function TimerHook(){
    const [useTimer,setuseTime]=useState('')
    const [count,setcount]=useState('')
    const [flag,setflag]=useState(false)

    function HandleClick(){
        setuseTime(count);
        setflag((prev)=> prev===false?true:true)
    }

    function PauseTimer(){
        setflag((prev)=>prev===true?false:false)
    }

    useEffect(()=>{
        let id;

        if(flag){
            id=setInterval(() => {
                console.log('counting');
            setcount((count)=>count-1);
            }, 1000);
        }

        return ()=>clearInterval(id)

    },[useTimer,flag])
    return(
        <div>
            <div>{count>0 && count}</div>
            <input type="text" placeholder="Enter the countdown duration" value={count}
            onChange={(e)=>setcount(e.target.value)} />
            <div>
                <button onClick={HandleClick}>SET</button>
                <button onClick={PauseTimer}>Pause</button>
            </div>
        </div>
    )
}