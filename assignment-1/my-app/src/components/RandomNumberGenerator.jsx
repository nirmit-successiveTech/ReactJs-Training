
"use client"
import { useState } from "react"

export default function RandomNumberGenerator(){
    const [randomnumber,setrandomnumber]=useState(parseInt(Math.random()*100));


    function Randomise(){
        let num = (Math.random()*100)
        num = parseInt(num);
        console.log(num);
        setrandomnumber(num)
    }

    return(
        <div className="number-wrapper" style={{width:"50%",margin:'auto',textAlign:'center',paddingTop:"20px"}}>
            <h2>{`The Random number generator is :${randomnumber}`}</h2>
            <div>
                <button onClick={Randomise} style={{padding:'15px',backgroundColor:'green',color:'white',border:'none',width:'100px',borderRadius:'10px'}}>Generate</button>
            </div>
            
        </div>

    )
}