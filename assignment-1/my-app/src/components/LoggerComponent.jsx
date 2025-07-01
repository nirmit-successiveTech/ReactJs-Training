"use client"
import withLogger from "@/app/day-5/hoc/withLogger";
import { useEffect, useState } from "react";


function LoggerComponent(){
      useEffect(() => {
    console.log('LoggerComponent updated'); // logs on every render
  });
    const [count,setcount]=useState(0);
    return(
        <div>
            <div>
                <div>
                    {count}
                </div>
                <button onClick={()=>setcount(count+1)}>Increase</button>
                <button onClick={()=>setcount(count-1)}>Decrease</button>
            </div>
        </div>
    )
}

const LogCounter = withLogger(LoggerComponent);
export default LogCounter;