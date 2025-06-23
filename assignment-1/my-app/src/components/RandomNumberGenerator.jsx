
"use client"
import { useState } from "react"

export default function RandomNumberGenerator(){
    const [randomnumber,setrandomnumber]=useState(45);


    function Randomise(){
        let num = (Math.random()*100)
        num = parseInt(num);
        console.log(num);
        setrandomnumber(num)
    }

    return(
        <div className="number-wrapper">
            <h2>{`The Random number generator is :${randomnumber}`}</h2>
            <div>
                <button onClick={Randomise}>Generate</button>
            </div>
            
        </div>

    )
}